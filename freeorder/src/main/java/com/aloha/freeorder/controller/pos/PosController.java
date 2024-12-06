package com.aloha.freeorder.controller.pos;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



/**
 * 페이지 컨트롤러
 * 뷰페이지 매핑
 */
@Slf4j
@Controller
@RequestMapping("/pos")
public class PosController {

    @GetMapping("/category")
    public String showCategoryPage() {
        log.info("카테고리 페이지");
        return "views/pos/category/category";
    }

    @GetMapping("/management")
    public String showManagementPage() {
        log.info("더보기 페이지");
        return "views/pos/management/sales/sales";
    }

    @GetMapping("/payment")
    public String showPaymentPage() {
        log.info("결제내역 페이지");
        return "views/pos/payment/list";
    }

    @GetMapping("/product")
    public String showProductPage() {
        log.info("상품 페이지");
        return "views/pos/product/products";
    }
    
    @GetMapping("/category/insert")
    public String showCategoryInsertPage() {
        log.info("카테고리 등록 페이지");
        return "views/pos/category/insert";
    }

    @GetMapping("/category/update")
    public String showCategoryUpdatePage() {
        log.info("카테고리 수정 페이지");
        return "views/pos/category/update";
    }

    @GetMapping("/management/notice")
    public String showManagementNotice() {
        log.info("매출관리 페이지");
        return "views/pos/management/notice/notice";
    }

    @GetMapping("/management/promotion")
    public String showManagementPromotion() {
        return "views/pos/management/promotion/promotion";
    }
    

}
