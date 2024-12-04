package com.aloha.freeorder.controller.qr;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import groovy.util.logging.Slf4j;

/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/qr/Carts")
public class QrCartController {
    
    // @Autowired
    // private CartService cartService;
    
    // @GetMapping()
    // public ResponseEntity<?> getAll() {
    //     try {
    //         List<Cart> cartList = cartService.list();
    //         return new ResponseEntity<>(cartList, HttpStatus.OK);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @GetMapping("/{id}")
    // public ResponseEntity<?> getOne(@PathVariable Long id) {
    //     try {
    //         Cart cart = cartService.read(id);
    //         return new ResponseEntity<>("GetOne Result", HttpStatus.OK);
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @PostMapping()
    // public ResponseEntity<?> create(@RequestBody Cart cart) {
    //     try {
    //         int result = cartService.insert(cart);
    //         if ( result > 0 ) {
    //             return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED);
    //         }
    //         else {
    //             return new ResponseEntity<>("Create Result", HttpStatus.OK);
    //         }
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @PutMapping()
    // public ResponseEntity<?> update(@RequestBody Cart cart) {
    //     try {
    //         int result = cartService.update(cart);
    //         if ( result > 0 ) {
    //             return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    //         }
    //         else {
    //             return new ResponseEntity<>("Create Result", HttpStatus.OK);
    //         }
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }
    
    // @DeleteMapping("/{id}")
    // public ResponseEntity<?> destroy(@PathVariable Long id) {
    //     try {
    //         int result = cartService.delete(id);
    //         if ( result > 0 ) {
    //             return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
    //         }
    //         else {
    //             return new ResponseEntity<>("Create Result", HttpStatus.OK);
    //         }
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }

}
