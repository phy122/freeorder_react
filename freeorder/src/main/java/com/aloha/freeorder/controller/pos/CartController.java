package com.aloha.freeorder.controller.pos;


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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.service.CartService;

import lombok.extern.slf4j.Slf4j;


/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/pos/carts")
public class CartController {
    
    @Autowired
    private CartService cartService;
    
    @GetMapping()
    public ResponseEntity<?> getAll(@CookieValue(value = "usersId", defaultValue = "null") String usersId) {
        log.info("장바구니 목록 조회");
        try {
            // List<Cart> cartList = cartService.list(usersId);
            List<Cart> cartList = new ArrayList<>();
            cartList.add(Cart.builder().productName("삼겹살").price(13000).build());
            cartList.add(Cart.builder().productName("항정살").price(15000).build());
            cartList.add(Cart.builder().productName("갈매기살").price(17000).build());
            cartList.add(Cart.builder().productName("양념갈비").price(14000).build());
            return new ResponseEntity<>(cartList,HttpStatus.OK);
        } catch (Exception e) {
            log.error("장바구니 목록 조회 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") String id) {
        log.info("장바구니 조회");
        try {
            Cart cart = cartService.select(id);
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } catch (Exception e) {
            log.error("장바구니 조회 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(Cart cart) {
        log.info("장바구니 등록");
        try {
            int result = cartService.insert(cart);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("장바구니 DB에 등록 중 에러...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("장바구니 등록 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(Cart cart) {
        log.info("장바구니 수정");
        try {
            int result = cartService.update(cart);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("장바구니 DB에서 수정 중 에러...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("장바구니 수정 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") String id) {
        log.info("장바구니 삭제");
        try {
            int result = cartService.delete(id);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("장바구니 DB에서 삭제 중 에러...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("장바구니 삭제 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
