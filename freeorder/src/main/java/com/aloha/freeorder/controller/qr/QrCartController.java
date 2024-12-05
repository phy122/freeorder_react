package com.aloha.freeorder.controller.qr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.service.CartService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
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
    
    @GetMapping()
    public ResponseEntity<?> getAll() {
        
        log.info("장바구니 전체 목록");
        try {
            List<Cart> cartList = cartService.list();
            return new ResponseEntity<>(cartList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("장바구니 전체 목록 조회 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
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
    public ResponseEntity<?> create(@RequestBody Cart cart, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String id = session.getId();
        cart.setId(id);
        log.info("장바구니 목록 추가");
        try {
            int result = cartService.insert(cart);
            if ( result > 0 ) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED);
            }
            else {
                return new ResponseEntity<>("Create Result", HttpStatus.OK);
            }
        } catch (Exception e) {
            log.error("장바구니 추가 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
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
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable String id) {
        log.info("장바구니 목록 삭제");
        try {
            int result = cartService.delete(id);
            if ( result > 0 ) {
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
