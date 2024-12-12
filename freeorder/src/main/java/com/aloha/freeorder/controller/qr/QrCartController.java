package com.aloha.freeorder.controller.qr;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
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

import lombok.extern.slf4j.Slf4j;

/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/qr/carts")
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
    public ResponseEntity<?> create(@CookieValue(value = "id",defaultValue = "null") String usersId ,@RequestBody Product product) throws Exception {
        log.info("장바구니 목록 추가");
        try {
            log.info(product.toString());
            Product infoProduct = productService.select(product.getId());
            String id = UUID.randomUUID().toString();
            Cart cart = new Cart();
            cart.setId(id);
            cart.setProductsId(product.getId());
            Option option = product.getOption();
            if (option != null) {
                List<OptionItem> getOpList = option.getItemList();
                List<CartOption> optionList = new ArrayList<>();
                for (OptionItem optionItem : getOpList) {
                    CartOption cartOption = CartOption.builder()
                                                      .id(UUID.randomUUID().toString())
                                                      .cartsId(id)
                                                      .optionItemsId(optionItem.getId())
                                                      .build();
                    optionList.add(cartOption);
                    log.info("장바구니 옵션목록 추가 : " + optionItem.toString());
                    cartService.insertOption(cartOption);
                }
                cart.setOptionList(optionList);
                cart.setOptionsId(option.getId());
            }
            cart.setPrice(infoProduct.getPrice());
            cart.setAmount(product.getQuantity());
            cart.setUsersId(usersId);
            log.info(cart.toString());
            int result = cartService.insert(cart);
            if (result > 0){
                log.info("장바구니 추가 성공.");
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }else{
                return new ResponseEntity<>("추가 실패.",HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("장바구니 추가 중 에러 발생", e);
            return new ResponseEntity<>("추가중 에러발생",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Cart cart) {
        log.info("장바구니 목록 수정");
        try {
            int result = cartService.update(cart);
            if ( result > 0 ) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("Create Result", HttpStatus.OK);
            }
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
            if ( result > 0 ) {
                cartService.deleteOption(id);
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("Create Result", HttpStatus.OK);
            }
        } catch (Exception e) {
            log.error("장바구니 삭제 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
