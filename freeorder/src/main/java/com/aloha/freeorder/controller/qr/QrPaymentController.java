package com.aloha.freeorder.controller.qr;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@RestController
@RequestMapping("/qr/payments")
public class QrPaymentController {
    
    // @Autowired
    // private PaymentService paymentService;
    
    // @GetMapping()
    // public ResponseEntity<?> getAll() {
    //     try {
    //         List<payment> paymentList = paymentService.list();
    //         return new ResponseEntity<>(paymentList, HttpStatus.OK);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @GetMapping("/{id}")
    // public ResponseEntity<?> getOne(@PathVariable Long id) {
    //     try {
    //         Payment payment = paymentService.read(id);
    //         return new ResponseEntity<>(payment, HttpStatus.OK);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @PostMapping()
    // public ResponseEntity<?> create(@RequestBody Payment payment) {
    //     try {
    //         int result = paymentService.insert(payment);
    //         if ( result > 0 ) {
    //             return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED);
    //         }
    //         else {
    //             return new ResponseEntity<>("FAIL", HttpStatus.OK);
    //         }
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @PutMapping()
    // public ResponseEntity<?> update(@RequestBody Payment payment) {
    //     try {
    //         int result = paymentService.update(payment);
    //         if ( result > 0 ) {
    //             return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    //         }
    //         else {
    //             return new ResponseEntity<>("FAIL", HttpStatus.OK);
    //         }
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @DeleteMapping("/{id}")
    // public ResponseEntity<?> destroy(@PathVariable Long id) {
    //     try {
    //         int result = paymentService.delete(id);
    //         if ( result > 0 ) {
    //             return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    //         }
    //         else {
    //             return new ResponseEntity<>("FAIL", HttpStatus.OK);
    //         }
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
}
