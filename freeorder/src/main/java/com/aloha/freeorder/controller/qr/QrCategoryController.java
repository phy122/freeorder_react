package com.aloha.freeorder.controller.qr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.service.CategoryService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/qr/categories")
@CrossOrigin("*")
public class QrCategoryController {

  @Autowired
  private CategoryService categoryService;

  @GetMapping()
  public ResponseEntity<?> getCate() {
    log.info("전체 카테고리 목록");
    try {
      List<Category> cateList = categoryService.list();
      return new ResponseEntity<>(cateList, HttpStatus.OK);
    } catch (Exception e) {
      log.error("상품 목록 조회 중 에러 발생", e);
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
