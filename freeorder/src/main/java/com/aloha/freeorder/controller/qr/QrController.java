package com.aloha.freeorder.controller.qr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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

import jakarta.servlet.http.HttpServletRequest;
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
  public String main(Model model) {
      log.info("메인 서버에 접속 하셨습니다.");
      return "views/qr/main";
  }

  
  @GetMapping("/notice/{id}")
  public String notice(@PathVariable("id") Long id, Model model) throws Exception {
      Notice notice = noticeService.read(id);
      model.addAttribute("notice", notice);
      return "view/qr/notice";
  }
  

  
  @GetMapping("/list")
  public String productList(@RequestParam(value =  "type",required = false) String type, @RequestParam(value = "cate", required = false) Long cate , Model model) throws Exception {
    List<Category> cateList = categoryService.list();
    List<Product> productList = null;
    log.info("cate : " + cate);
    if (cate == null)
      productList = productService.allList();
    else
      productList = productService.listByCate(cate);

    model.addAttribute("cateList", cateList);
    model.addAttribute("productList", productList);
    return "views/qr/product/list";
  }

  
  @GetMapping("/read/{id}")
  public String product(@PathVariable("id") Long id, Model model) throws Exception {
      Product product = productService.select(id);
      model.addAttribute("product", product);
      return "view/qr/product/read";
  }
  

  @GetMapping("/cart")
  public String orderList(@RequestParam String cart, Model model, HttpServletRequest request) throws Exception  {
    HttpSession session = request.getSession();
    String id = session.getId();
    List<Cart> cartList = cartService.list();
    model.addAttribute("cartLsit", cartList);
    return "view/qr/product/cart";
  }
  

  @GetMapping("/pay/{id}")
  public String payment(@PathVariable("id") Long id, Model model) throws Exception {
      Payment payment = paymentService.select(id); 
      model.addAttribute("payment", payment);
      return "view/qr/pay/pay";
  }


  // @GetMapping("/pay/complete/{??}")
  // public String complete(@PathVariable("id") Long id, Model model) throws Exception {
  //     Payment payment = paymentService.select(id);
  //     model.addAttribute("payment", payment);
  //     return "view/qr/pay/complete";
  // }
  
  // 결제 결과에 따른 참조 조건 질문하기.

  @GetMapping("/order/{id}")
  public String orderPayment(@PathVariable("id") Long id, Model model) throws Exception {
      Order order = orderService.read(id);
      model.addAttribute("order", order);
      return "view/qr/order/list";
  }
  

  
  
  
  
  
  
}
