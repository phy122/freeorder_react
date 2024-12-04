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

import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.ProductService;

/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@RestController
@RequestMapping("/qr/products")
public class QrProductController {

  @Autowired
  private ProductService productService;

  
  @GetMapping()
  public ResponseEntity<?> getAll() {
      try {
          List<Product> productList = productService.list();
          return new ResponseEntity<>(productList, HttpStatus.OK);
      } catch (Exception e) {
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }
  
  @PostMapping()
  public ResponseEntity<?> create(@RequestBody Product product) {
      try {
          int result = productService.insert(product);
          if ( result > 0 ) {
              return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED);
          }
          else {
              return new ResponseEntity<>("FAIL", HttpStatus.OK);
          }
      } catch (Exception e) {
          return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }
  
  @PutMapping()
  public ResponseEntity<?> update(@RequestBody Product product) {
      try {
        int result = productService.update(product);
        if ( result > 0 ) {
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("FAIL", HttpStatus.OK);
        }
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  @DeleteMapping("/{id}")
  public ResponseEntity<?> destroy(@PathVariable Long id) {
    try {
        int result = productService.delete(id);
        if ( result > 0 ) {
            return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("FAIL", HttpStatus.OK);
        }
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
