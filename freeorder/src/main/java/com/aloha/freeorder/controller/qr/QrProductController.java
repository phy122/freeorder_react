package com.aloha.freeorder.controller.qr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.ProductService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;


/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/qr/products")
@CrossOrigin("*")
public class QrProductController {

  @Autowired
  private ProductService productService;

  @GetMapping()
  public ResponseEntity<?> getAll(HttpServletRequest request) {
    log.info("전체 상품 목록");
    
    String cateId = request.getParameter("cate");
    log.info( "cateId : " + cateId);
    List<Product> productList = null;
    try {
      if (cateId == null || cateId.isEmpty()) {
        productList = productService.allList();
      }
      else {
        productList = productService.listByCate(cateId);
      }
      return new ResponseEntity<>(productList, HttpStatus.OK);
    } catch (Exception e) {
      log.error("상품 목록 조회 중 에러 발생", e);
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getProduct(@PathVariable("id") String productsId) {
    log.info("상품 조회");
    try {
      Product product = productService.select(productsId);
      return new ResponseEntity<>(product, HttpStatus.OK);
    } catch (Exception e) {
      log.error("상품 목록 조회 중 에러 발생", e);
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  @PostMapping()
  public ResponseEntity<?> create(Product product) {
    log.info("상품 등록");
    try {
      int result = productService.insert(product);
      if (result > 0) {
        return new ResponseEntity<>("SUCCESS", HttpStatus.CREATED);
      } else {
        return new ResponseEntity<>("FAIL", HttpStatus.OK);
      }
    } catch (Exception e) {
      log.error("상품 등록 중 에러 발생", e);
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping()
  public ResponseEntity<?> update(Product product) {
    log.info("상품 수정");
    try {
      int result = productService.update(product);
      if (result > 0) {
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
      } else {
        return new ResponseEntity<>("FAIL", HttpStatus.OK);
      }
    } catch (Exception e) {
      log.error("상품 수정 중 에러 발생", e);
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> destroy(@PathVariable("id") String id) {
    log.info("상품 삭제");
    try {
      int result = productService.delete(id);
      if (result > 0) {
        return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
      } else {
        return new ResponseEntity<>("FAIL", HttpStatus.OK);
      }
    } catch (Exception e) {
      log.error("상품 삭제 중 에러 발생", e);
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
