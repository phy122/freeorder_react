package com.aloha.freeorder.controller.pos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Payment;
import com.aloha.freeorder.service.PaymentService;

import lombok.extern.slf4j.Slf4j;

/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/pos/payments")
public class PaymentController {
    
    @Autowired
    private PaymentService paymentService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("결제내역 목록 조회");
        try {
            List<Payment> payList = paymentService.list();
            return new ResponseEntity<>(payList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("결제내역 목록 조회 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Long id) {
        log.info("결제내역 조회");
        try {
            Payment payment = paymentService.select(id);
            return new ResponseEntity<>(payment, HttpStatus.OK);
        } catch (Exception e) {
            log.error("결제내역 조회 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(Payment payment) {
        log.info("결제내역 등록");
        try {
            int result = paymentService.insert(payment);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("결제내역 DB에 등록 중 에러...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("결제내역 등록 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(Payment payment) {
        log.info("결제내역 수정");
        try {
            int result = paymentService.update(payment);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("결제내역 DB에서 수정 중 에러...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("결제내역 수정 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") Long id) {
        log.info("결제내역 삭제");
        try {
            int result = paymentService.delete(id);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("결제내역 DB에서 삭제 중 에러...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("결제내역 삭제 중 에러...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
