package com.aloha.freeorder.controller.qr;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.extern.slf4j.Slf4j;




/**
 * 페이지 컨트롤러
 * 뷰페이지 매핑
 */
@Slf4j
@Controller
@RequestMapping("/qr")
public class QrController {

  @GetMapping("/main")
  public String main(Model model) {
      log.info("메인 서버에 접속 하셨습니다.");
      return "views/qr/main";
  }
  
  
  @GetMapping("/product/list/{type}")
  public String getMethodName(@PathVariable("type") String type) {
      if (type.equals("hall")) {
          // 세션에 매장 등록
      }
      else if (type.equals("takeout")) {
          // 세션에 포장 등록
      }
      return "/views/qr/product/list";
  }

}
