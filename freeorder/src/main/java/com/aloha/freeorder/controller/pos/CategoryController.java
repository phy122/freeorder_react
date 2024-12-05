package com.aloha.freeorder.controller.pos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.service.CategoryService;

import lombok.extern.slf4j.Slf4j;


/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/pos/categories")
public class CategoryController {
    
    @Autowired
    private CategoryService categoryService;

    @GetMapping()
    public ResponseEntity<?> list() throws Exception {
        log.info("카테고리 목록 조회");
        List<Category> CategoryList = categoryService.list();
        return ResponseEntity.ok(CategoryList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable("id") String id) throws Exception {
        log.info("카테고리 조회");
        Category category = categoryService.read(id);
        return ResponseEntity.ok(category);
    }

    @PostMapping()
    public ResponseEntity<?> insertPro(Category category) throws Exception {
        log.info("카테고리 등록");
        int result = categoryService.insert(category);
        if (result > 0) {
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @PutMapping()
    public ResponseEntity<?> updatePro(Category category) throws Exception {
        log.info("카테고리 수정");
        int result = categoryService.update(category);
        if(result > 0){
            return ResponseEntity.ok("seccess");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) throws Exception {
        log.info("카테고리 삭제");
        int result = categoryService.delete(id);
        if(result > 0){
            return ResponseEntity.ok("seccess");
        }
        return ResponseEntity.badRequest().body("error");
    }
    
    
    
    
    
}
