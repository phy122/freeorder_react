package com.aloha.freeorder.controller.qr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.CategoryService;
import com.aloha.freeorder.service.ProductService;

import lombok.extern.slf4j.Slf4j;






/**
 * 페이지 컨트롤러
 * 뷰페이지 매핑
 */
@Slf4j
@Controller
@RequestMapping("/qr")
public class QrController {

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProductService productService;

  @GetMapping("/main")
  public String main(Model model) {
      log.info("메인 서버에 접속 하셨습니다.");
      return "/views/qr/main";
  }
  
  
  @GetMapping("/product/list")
  public String list(@RequestParam("type") String type, @RequestParam("cate") int cate , Model model) throws Exception {
    List<Category> cateList = categoryService.list();
    // List<Product> productList = productService.list(cate);

    model.addAttribute("cateList", cateList);
    // model.addAttribute("productList", productList);
      if (type.equals("hall")) {
          // 세션에 매장 등록
      }
      else if (type.equals("takeout")) {
          // 세션에 포장 등록
      }
      return "/views/qr/product/list";
  }

  
  
  
  
}
