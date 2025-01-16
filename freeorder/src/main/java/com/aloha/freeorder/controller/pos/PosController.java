package com.aloha.freeorder.controller.pos;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.PaySearch;
import com.aloha.freeorder.domain.Payment;
import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.domain.SystemStatus;
import com.aloha.freeorder.service.CategoryService;
import com.aloha.freeorder.service.NoticeService;
import com.aloha.freeorder.service.OptionService;
import com.aloha.freeorder.service.OrderService;
import com.aloha.freeorder.service.PaymentService;
import com.aloha.freeorder.service.ProductService;
import com.aloha.freeorder.service.SystemStatusService;

import lombok.extern.slf4j.Slf4j;

/**
 * 페이지 컨트롤러
 * 뷰페이지 매핑
 */
@Slf4j
@RestController
@RequestMapping("/")
@CrossOrigin("*")
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
    private SystemStatusService statusService;
    

    /**
     * Product
     */
    // 상품 목록
    @GetMapping({ "/product", "/product/{id}" })
    public String showProductPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model, @PathVariable(value = "id", required = false) String id,
            @RequestParam(value = "cate", required = false) String cate) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        List<Category> cateList = categoryService.list();
        log.info("cate : " + cate);
        // 상품 목록
        List<Product> productList = null;
        if (cate != null && !cate.isEmpty()) {
            productList = productService.listByCate(cate);
        } else {
            // cate 값이 null이거나 비어있을 경우, 모든 상품을 가져옵니다.
            productList = productService.allList();
        }
        log.info(productList.toString());
        model.addAttribute("productList", productList);
        model.addAttribute("cateList", cateList);
        model.addAttribute("cateId", cate);
        
        log.info("상품 페이지");
        return "views/pos/product/products";
    }

    // 상품 등록
    @GetMapping("/product/insert")
    public String showProductInsertPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {
        log.info("상품 등록 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]
        // 상품 목록
        List<Product> productList = productService.allList();
        model.addAttribute("productList", productList);
        // 카테고리 목록
        List<Category> cateList = categoryService.list();
        model.addAttribute("cateList", cateList);

        return "views/pos/product/insert";
    }

    // 상품 수정 목록
    @GetMapping("/product/update_list")
    public String showProductUpdateList(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model, @PathVariable(value = "id", required = false) String id) throws Exception {
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]
        List<Product> productList = null;
        if (id != null) {
            productList = productService.listByCate(id);
        } else {
            productList = productService.allList();
        }
        log.info(productList.toString());
        model.addAttribute("productList", productList);

        log.info("상품 수정 목록 페이지");
        return "views/pos/product/update_list";
    }

    // 상품 위치 수정
    @GetMapping("/product/locate")
    public String showProductLocate(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model, @PathVariable(value = "id", required = false) String id) throws Exception {
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]
        List<Product> productList = null;
        if (id != null) {
            productList = productService.listByCate(id);
        } else {
            productList = productService.allList();
        }
        log.info(productList.toString());
        model.addAttribute("productList", productList);

        log.info("상품 위치 수정 페이지");
        return "views/pos/product/locate";
    }

    // 상품 수정
    @GetMapping("/product/update/{id}")
    public String showProductUpdatePage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model,
            @PathVariable("id") String id) throws Exception {
        log.info("상품 등록 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]
        // 상품 조회
        Product product = productService.select(id);
        model.addAttribute("product", product);
        // 카테고리 목록
        List<Category> cateList = categoryService.list();
        model.addAttribute("cateList", cateList);

        return "views/pos/product/update";
    }

    /**
     * Category
     */
    // 카테고리 목록
    @GetMapping("/category")
    public String showCategoryPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        // 카테고리 목록
        List<Category> cateList = categoryService.list();
        log.info("cateList: " + cateList);
        model.addAttribute("cateList", cateList);

        log.info("카테고리 페이지");
        return "views/pos/category/category";
    }

    // 카테고리 등록
    @GetMapping("/category/insert")
    public String showCategoryInsertPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        log.info("카테고리 등록 페이지");
        return "views/pos/category/insert";
    }

    // 카테고리 수정
    @GetMapping("/category/update/{id}")
    public String showCategoryUpdatePage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model, @PathVariable("id") String id) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        Category category = categoryService.read(id);
        model.addAttribute("category", category);

        log.info("카테고리 등록 페이지");
        return "views/pos/category/update";
    }

    // 카테고리 순서 변경
    @GetMapping("/category/seq_list")
    public String showCategorySeqList(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        // 카테고리 목록
        List<Category> cateList = categoryService.list();
        model.addAttribute("cateList", cateList);

        log.info("카테고리 순서 페이지");
        return "views/pos/category/seq_list";
    }

    /**
     * Payment
     */
    // 결제 내역 목록
    @GetMapping("/payment")
    public String showPaymentPage(
            PaySearch paySearch,
            @CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {
        log.info("결제내역 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]
        log.info(" 서치 옵션 : " + paySearch);
        if (paySearch == null) {
            paySearch = PaySearch.builder().date(1).build();
        }
        // 검색 값이 없을경우 기본값 세팅
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        // TODO:결제내역 뷰페이지 수정 / 최소 최대 금액 입력시 처리 내용 / 카드,현금 선택시 처리 내용
        
        Calendar c = Calendar.getInstance();
        String stDate = sdf.format(c.getTime());
        paySearch.setEndDay(stDate);
        c.add(Calendar.DATE, -paySearch.getDate());
        String endDate = sdf.format(c.getTime());
        paySearch.setStartDay(endDate);
        log.info(paySearch.toString());
        List<Payment> payList = paymentService.listByOption(paySearch);

        log.info("결제 리스트 : " + payList.toString());
        model.addAttribute("paySearch", paySearch);
        model.addAttribute("payList", payList);
        return "views/pos/payment/list";
    }

    @GetMapping("/payment/{id}")
    public String getMethodName(@PathVariable("id") String paymentsId,Model model) throws Exception {
        Payment payment = paymentService.select(paymentsId);
        model.addAttribute("payment", payment);
        return "views/pos/payment/read";
    }
    

    /**
     * Management
     */
    // 판매 관리
    @GetMapping({ "/management", "/management/{date}" })
    public String showManagementPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model, @PathVariable(value = "date", required = false) Date month) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
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

    // 판매 관리 상세 내역
    @GetMapping("/management/sales_detail")
    public String showSalesDetailPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]
        return "views/pos/management/sales/sales_detail";
    }

    // 공지사항
    @GetMapping("/notice")
    public String notice(@CookieValue(value = "operation", defaultValue = "false") boolean operation, Model model)
            throws Exception {
        log.info("공지사항 등록 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        Notice notice = noticeService.read();
        model.addAttribute("notice", notice);
        return "views/pos/management/notice/notice";
    }

    // 프로모션 목록
    @GetMapping({ "/promotion", "/promotion/list" })
    public String promotionList(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {
        log.info("프로모션 목록 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        // 프로모션 목록
        List<Notice> proList = noticeService.list();
        model.addAttribute("proList", proList);
        return "views/pos/management/promotion/promotion";
    }

    // 프로모션 등록
    @GetMapping("/promotion/insert")
    public String promotionInsert(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {
        log.info("프로모션 등록 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        return "views/pos/management/promotion/promotion_insert";
    }

    // 프로모션 수정
    @GetMapping("/promotion/update/{id}")
    public String promotionUpdate(@PathVariable("id") String id,
            @CookieValue(value = "operation", defaultValue = "false") boolean operation, Model model) throws Exception {
        log.info("프로모션 수정 페이지");
        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        Notice notice = noticeService.select(id);
        model.addAttribute("notice", notice);
        return "views/pos/management/promotion/promotion_update";
    }

    // 옵션 목록 조회
    @GetMapping("/option")
    public String optionListPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        // 옵션 목록
        List<Option> optionList = optionService.list();
        log.info("optionList: " + optionList);
        model.addAttribute("optionList", optionList);

        log.info("옵션 조회 페이지");
        return "views/pos/option/option";
    }

    // 옵션 등록
    @GetMapping("/option/insert")
    public String optionInsertPage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        Option option = new Option();
        model.addAttribute("option", option);

        log.info("옵션 등록 페이지");
        return "views/pos/option/insert";
    }

    // 옵션 수정
    @GetMapping("/option/update/{id}")
    public String optionUpdatePage(@CookieValue(value = "operation", defaultValue = "false") boolean operation,
            Model model, @PathVariable("id") String id) throws Exception {

        // 공통 모델 등록 객체들 [Modal로 띄워주는 비동기페이지는 이거 필요없음]
        List<Order> orderList = orderService.list();
        SystemStatus systemStatus = statusService.selectStatus();
        model.addAttribute("operation", operation);
        model.addAttribute("orderlist", orderList);
        model.addAttribute("status", systemStatus);
        // 공통객체 [끝]

        Option option = optionService.read(id);
        model.addAttribute("option", option);
        log.info("옵션 수정 페이지");
        return "views/pos/option/update";
    }

}
