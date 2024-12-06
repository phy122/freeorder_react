package com.aloha.freeorder.controller.pos;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.CancellationService;
import com.aloha.freeorder.service.CartService;
import com.aloha.freeorder.service.CategoryService;
import com.aloha.freeorder.service.FileService;
import com.aloha.freeorder.service.NoticeService;
import com.aloha.freeorder.service.OptionService;
import com.aloha.freeorder.service.OrderService;
import com.aloha.freeorder.service.PaymentService;
import com.aloha.freeorder.service.ProductService;

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

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProductService productService;
    @Autowired
    private NoticeService noticeService;
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private OptionService optionService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private CancellationService cancellationService;
    @Autowired
    private CartService cartService;
    @Autowired
    private FileService fileService;



    @GetMapping("/category")
    public String showCategoryPage(@CookieValue(value = "operation",defaultValue = "false") boolean operation , Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        // 공통객체 [끝]
        
        // 카테고리 목록
        List<Category> cateList = categoryService.list();
        model.addAttribute("cateList", cateList);

        log.info("카테고리 페이지");
        return "views/pos/category/category";
    }

    @GetMapping({"/management","/management/{date}"})
    public String showManagementPage(@CookieValue(value = "operation",defaultValue = "false") boolean operation 
                                    ,Model model
                                    ,@PathVariable(value = "date", required = false ) Date month ) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        // 공통객체 [끝]

        // 날짜 설정
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM");
        if (month == null) {
            month = new Date();
        }
        String today = sdf.format(month);
        model.addAttribute("today", today);

        // 해당 달의 판매 내역
        

        // 해당 달의 환불 내역
        log.info("더보기 페이지");
        return "views/pos/management/sales/sales";
    }

    @GetMapping("/payment")
    public String showPaymentPage(@CookieValue(value = "operation",defaultValue = "false") boolean operation , Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        // 공통객체 [끝]

        log.info("결제내역 페이지");
        return "views/pos/payment/list";
    }

    @GetMapping({"/product","/product/{id}"})
    public String showProductPage(@CookieValue(value = "operation",defaultValue = "false") boolean operation 
                                 ,Model model
                                 ,@PathVariable(value = "id",required = false) String id) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        // 공통객체 [끝]

        // 상품 목록
        List<Product> productList = null;
        if (id != null) {
            productList = productService.listByCate(id);
        }
        else{
            productList = productService.allList();
        }
        model.addAttribute("productList", productList);

        log.info("상품 페이지");
        return "views/pos/product/products";
    }
    
    @GetMapping("/category/insert")
    public String showCategoryInsertPage(@CookieValue(value = "operation",defaultValue = "false") boolean operation , Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        // 공통객체 [끝]

        log.info("카테고리 등록 페이지");
        return "views/pos/category/insert";
    }

    @GetMapping("/category/update/{id}")
    public String showCategoryUpdatePage(@CookieValue(value = "operation",defaultValue = "false") boolean operation 
                                        ,Model model
                                        ,@PathVariable("id") String id) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        // 공통객체 [끝]
        
        Category category = categoryService.read(id);
        model.addAttribute("category", category);
        
        log.info("카테고리 등록 페이지");
        return "views/pos/category/update";
    }

    @GetMapping("/notice")
    public String notice(Model model) throws Exception {
        Notice notice = noticeService.read();
        model.addAttribute("notice", notice);
        return "views/pos/management/notice/notice";
    }

    @GetMapping({"/promotion","/promotion/list"})
    public String promotionList() {
        return "views/pos/management/promotion/promotion";
    }

    @GetMapping("/promotion/insert")
    public String promotionInsert() {
        return "views/pos/management/promotion/promotion_insert";
    }

    @GetMapping("/promotion/update/{id}")
    public String promotionUpdate(@PathVariable("id") String id, Model model) throws Exception {
        Notice notice = noticeService.select(id);
        model.addAttribute("notice", notice);
        return "views/pos/management/promotion/promotion_update";
    }
    
    
    

}
