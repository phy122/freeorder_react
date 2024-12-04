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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.ProductService;

import lombok.extern.slf4j.Slf4j;



/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/pos/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    /**
     * 상품 목록
     * [GET]
     * response : productList
     * @return
     */
    // @GetMapping()
    // public ResponseEntity<?> list() {
    //     try {
    //         List<Product> productList = productService.list();

            // ---------JSON 형식 헤더 설정-----
            // MultiValueMap<String,String> headers = new LinkedMultiValueMap<>();
            // List<String> headerList = new LinkedList<>();
            // headerList.add("application/json");
            // headers.put("Content-Type", headerList);

            // return new ResponseEntity<>(productList, headers, HttpStatus.OK);
    //         return new ResponseEntity<>(productList, HttpStatus.OK);
    //     } catch (Exception e){
    //         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
    // }

    // @GetMapping("/{}")
    // public String getMethodName(@RequestParam String param) {
    //     return new String();
    // }
    
    /**
     * 상품 목록
     * @return
     */
    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("[비동기] 상품 목록 조회...");
        try {
            List<Product> productList = productService.allList();
            return new ResponseEntity<>(productList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 상품 조회
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Long id) {
        log.info("[GET] - /product/" + id);
        try {
            Product product = productService.select(id);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 상품 등록 처리
     * @param product
     * @return
     */
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Product product) {
        log.info("[POST] - /products");
        try {
            int result = productService.insert(product);
            if( result == 0 )
                return ResponseEntity.badRequest().build();
            return new ResponseEntity<>("CREATED", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 상품 수정 처리
     * @param product
     * @return
     */
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Product product) {
        try {
            int result = productService.update(product);
            if( result == 0 )
                return ResponseEntity.badRequest().build();
            return new ResponseEntity<>("UPDATED", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 상품 삭제 처리
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") Long id) {
        log.info("[DELETE] - /products/" + id);
        try {
            int result = productService.delete(id);
            if( result == 0 )
                return ResponseEntity.badRequest().build();
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
