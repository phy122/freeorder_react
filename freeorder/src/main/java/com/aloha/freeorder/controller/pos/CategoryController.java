package com.aloha.freeorder.controller.pos;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        log.info(category.toString());
        int result = categoryService.insert(category);
        if (result > 0) {
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @PutMapping()
    public ResponseEntity<?> updatePro(Category category) throws Exception {
        log.info("카테고리 수정");
        log.info(category.toString());
        int result = categoryService.update(category);
        log.info("result : " + result);
        if(result > 0){
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @DeleteMapping()
    public ResponseEntity<?> delete(Category category) throws Exception {
        log.info("카테고리 삭제");
        String id = category.getId();
        int result = categoryService.delete(id);
        if(result > 0){
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }
    
    @PostMapping("/seq_list")
    public ResponseEntity<?> saveProductOrder(@RequestBody List<Category> cateList) {
        Map<String, String> response = new HashMap<>();
        try {
            // 로그 추가
            System.out.println("Received product list: " + cateList);
            
            categoryService.updateCategoryOrder(cateList);
            response.put("status", "SUCCESS");
            response.put("message", "순서가 성공적으로 업데이트 되었습니다.");
            return ResponseEntity.ok(response);  // 200 OK 응답
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "FAIL");
            response.put("message", "순서 업데이트에 실패했습니다.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);  // 500 Internal Server Error 응답
        }
    }

    
    
    
    
}
