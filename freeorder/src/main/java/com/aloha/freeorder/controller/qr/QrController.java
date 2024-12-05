package com.aloha.freeorder.controller.qr;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.Payment;
import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.service.CartService;
import com.aloha.freeorder.service.CategoryService;
import com.aloha.freeorder.service.NoticeService;
import com.aloha.freeorder.service.OrderService;
import com.aloha.freeorder.service.PaymentService;
import com.aloha.freeorder.service.ProductService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
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
    private NoticeService noticeService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private ProductService productService;
    @Autowired
    private CartService cartService;
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private OrderService orderService;

  @GetMapping("/main")
  public String main(Model model,HttpServletRequest request, @CookieValue(value = "id", defaultValue = "null") String cookieId) {
    
    HttpSession session = request.getSession();
    String id = UUID.randomUUID().toString();
    if (id.equals("id")) {
      id = cookieId;
    }
    //TODO: 쿠키 마저 구워주세요.
    session.setAttribute("id", id);
    log.info("쿠키 아이디 : " + cookieId);
    log.info("접속시 부여된 아이디 : " + id);
    log.info("메인 서버에 접속 하셨습니다.");
    return "views/qr/main";
  }

  
  @GetMapping("/notice/{id}")
  public String notice(@PathVariable("id") String id, Model model) throws Exception {
      log.info("공지사항 출력!!");
      Notice notice = noticeService.read(id);
      model.addAttribute("notice", notice);
      return "views/qr/notice";
  }
  

  
  @GetMapping("/list")
  public String productList(@RequestParam(value =  "type",required = false) String type, 
                            @RequestParam(value = "cate", required = false) String cate , 
                            Model model,
                            HttpServletRequest request,
                            HttpServletResponse response) throws Exception {
   HttpSession session = request.getSession();
   String id = (String) session.getAttribute("id");
   Cookie cookie = new Cookie("id", id);
   cookie.setMaxAge(60 * 60 * 24 * 1);
   response.addCookie(cookie);
// 84a8564b-2b92-4d43-a4bf-36c93b754537
    log.info("카테고리별 상품 목록 출력!!");
    List<Category> cateList = categoryService.list();
    List<Product> productList = null;
    log.info("cate : " + cate);
    if (cate == null)
      productList = productService.allList();
    else
      productList = productService.listByCate(cate);

    model.addAttribute("cateId", cate);
    model.addAttribute("cateList", cateList);
    model.addAttribute("productList", productList);
    return "views/qr/product/list";
  }

  
  @GetMapping("/read/{id}")
  public String product(@PathVariable("id") String id, Model model) throws Exception {
    log.info("상품 상세페이지 출력!!");
      Product product = productService.select(id);
      model.addAttribute("product", product);
      return "views/qr/product/read";
  }
  

  @GetMapping("/cart")
  public String orderList(Model model, HttpServletRequest request) throws Exception  {
    log.info("장바구니 목록 출력!!");
    HttpSession session = request.getSession();
    String id = (String) session.getAttribute("id");
    log.info("Session 에 등록 된 사용자 아이디 : " + id);
    List<Cart> cartList = cartService.list();
    model.addAttribute("cartLsit", cartList);
    return "views/qr/product/cart";
  }
  

  @GetMapping("/pay/{id}")
  public String payment(@PathVariable("id") String id, Model model) throws Exception {
    log.info("결제 창 출력!!");
      Payment payment = paymentService.select(id); 
      model.addAttribute("payment", payment);
      return "views/qr/pay/pay";
  }


  @GetMapping("/pay/complete/{status}")
  public String complete(@PathVariable("status") String status, Model model,HttpServletRequest request, HttpServletResponse response) throws Exception {

    if (status.equals("complete")) {
      HttpSession session = request.getSession();
      String id = (String) session.getAttribute("id");
      Cookie cookie = new Cookie("id", id);
      cookie.setMaxAge(60 * 60 * 24 * 1);
      response.addCookie(cookie);
    }
      model.addAttribute("status", status);
      return "views/qr/pay/complete";
  }
  

  @GetMapping("/order")
  public String orderPayment(Model model, @CookieValue(value = "id", defaultValue = "null") String id) throws Exception {
    if (id.equals("null")) {
      Order order = orderService.read(id);
      model.addAttribute("order", order);
    }
    return "views/qr/order/list";
  }
  

  
  
  
  
  
  
}
