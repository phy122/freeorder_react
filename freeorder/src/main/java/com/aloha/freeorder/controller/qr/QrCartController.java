package com.aloha.freeorder.controller.qr;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.domain.CartOption;
import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.domain.OptionItem;
import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.CartService;
import com.aloha.freeorder.service.ProductService;
import com.aloha.freeorder.util.OptionComparator;

import lombok.extern.slf4j.Slf4j;

/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/qr/carts")
@CrossOrigin("*")
public class QrCartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable String id) {
        log.info("장바구니 조회");
        try {
            Cart cart = cartService.select("");
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } catch (Exception e) {
            log.error("장바구니 조회 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping()
    public ResponseEntity<?> create(@CookieValue(value = "id", defaultValue = "null") String usersId,
            @RequestBody Product product) throws Exception {
        log.info("장바구니 목록 추가");
        try {
            log.info(product.toString());
            Product infoProduct = productService.select(product.getId());
            log.info("infoProdsuct : " + infoProduct);

            String id = UUID.randomUUID().toString();
            Cart cart = new Cart();
            cart.setId(id);
            cart.setProductName(infoProduct.getName());
            cart.setProductsId(product.getId());
            log.info("product : " + product);
            Option option = product.getOption();
            if (option != null) {
                // log.info("option null 아님");
                List<OptionItem> getOpList = option.getItemList();
                // log.info(getOpList.toString());
                List<CartOption> optionList = new ArrayList<>();
                for (OptionItem optionItem : getOpList) {
                    if (optionItem.isChecked()) {
                        CartOption cartOption = CartOption.builder()
                                .id(UUID.randomUUID().toString())
                                .cartsId(id)
                                .usersId(usersId)
                                .name(optionItem.getName())
                                .optionItemsId(optionItem.getId())
                                .build();
                        optionList.add(cartOption);
                    }
                }
                cart.setOptionList(optionList);
                cart.setOptionsId(option.getId());
            }
            cart.setPrice(infoProduct.getPrice());
            cart.setAmount(product.getQuantity());
            cart.setUsersId(usersId);
            // log.info(cart.toString());
            List<Cart> existCartList = cartService.ListByUsersIdAndProductsId(usersId, product.getId());
            // log.info("existCartList : " + existCartList);
            if (existCartList != null)
                for (Cart existCart : existCartList) {

                    if (existCart == null || cart == null)
                        continue;

                    List<CartOption> existCartOptionList = existCart.getOptionList();
                    List<CartOption> cartOptionList = cart.getOptionList();

                    log.info("existCartOptionList : " + existCartOptionList);

                    if (existCartOptionList == null || cartOptionList == null)
                        continue;

                    if (OptionComparator.areOptionListsEqual(existCartOptionList, cartOptionList)) {
                        existCart.setAmount(existCart.getAmount() + cart.getAmount());
                        cartService.updateAmount(existCart);
                        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
                    }
                }
            if (option != null) {
                for (CartOption cartOption : cart.getOptionList()) {
                    cartService.insertOption(cartOption);
                }
            }
            cartService.insert(cart);
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        } catch (Exception e) {
            log.error("장바구니 추가 중 에러 발생", e);
            e.printStackTrace();
            return new ResponseEntity<>("추가중 에러발생", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping()
    public ResponseEntity<?> update(
            @CookieValue(value = "id") String usersId, @RequestBody Cart cart) {
        log.info("장바구니 목록 수정");
        log.info("장바구니 정보" + cart);
        // 장바구니 옵션 설정
        try {
            List<CartOption> optionList = cart.getOptionList();
            cartService.allDeleteOptionByUserId(usersId);
            log.info("옵션 목록 : " + optionList);
            if (optionList != null) {
                for (CartOption cartOption : optionList) {
                    // OptionItem itemInfo = optionService.readItem(cartOption.getOptionItemsId());
                    cartOption.setId(UUID.randomUUID().toString());
                    // cartOption.setName(itemInfo.getName());
                    cartOption.setCartsId(cart.getId());
                    // cartOption.setPrice(itemInfo.getPrice());
                    cartOption.setUsersId(usersId);
                    cartService.insertOption(cartOption);
                    log.info("장바구니 옵션 변경!");
                }
            }
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        } catch (Exception e) {
            log.error("장바구니 수정 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping()
    public ResponseEntity<?> destroy(Cart cart) {
        log.info("장바구니 목록 삭제");
        String id = cart.getId();
        try {
            int result = cartService.delete(id);
            if (result > 0) {
                cartService.deleteOption(id);
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("장바구니 삭제 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<?> destroyAll(
            @CookieValue(value = "id", defaultValue = "", required = false) String usersId) {
        log.info("장바구니 목록 전체 삭제");
        try {
            int result = cartService.allDeleteByUserId(usersId);
            if (result > 0) {
                cartService.allDeleteOptionByUserId(usersId);
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("장바구니 삭제 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
