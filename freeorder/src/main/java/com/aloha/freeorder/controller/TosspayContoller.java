package com.aloha.freeorder.controller;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.domain.CartOption;
import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.OrderItem;
import com.aloha.freeorder.domain.OrderOption;
import com.aloha.freeorder.domain.Payment;
import com.aloha.freeorder.service.CartService;
import com.aloha.freeorder.service.OrderService;
import com.aloha.freeorder.service.PaymentService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class TosspayContoller {
    

    @Autowired
    private PaymentService paymentService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private CartService cartService;


    @GetMapping({"/pay/pay"})
    public String payment(Model model, 
                          HttpServletRequest request,
                          @CookieValue(value = "id", defaultValue = "") String userId) throws Exception {
        String orderId = UUID.randomUUID().toString();
        HttpSession session = request.getSession();
        String sessionUserId = (String) session.getAttribute("id");
        log.info("장바구니 목록 출력!!");
        log.info("유저 아이디 : " + sessionUserId);
        List<Cart> cartList = cartService.listByUser(sessionUserId);
        log.info( "장바구니 목록 : " + cartList.toString());
        int total = 0;

        String title = "";
        Order order = Order.builder()
                           .id(orderId)
                           .userId(userId)
                           .totalPrice(total)
                           .totalQuantity(cartList.size())
                           .build();
        List<OrderItem> itemList = new ArrayList<>();

        for (Cart cart : cartList) {
            List<CartOption> optionList = cart.getOptionList();
            log.info("옵션리스트 가격: " + optionList.toString());
            total += cart.getPrice() * cart.getAmount();
            for (CartOption cartOption : optionList) {
                total += cartOption.getPrice();
            }
            if (title.equals("")) {
                title = cart.getProductName();
            }
            String orderItemId = UUID.randomUUID().toString();
            OrderItem orderItem = OrderItem.builder()
                                           .id(orderItemId)
                                           .ordersId(orderId)
                                           .productsId(cart.getProductsId())
                                           .optionId(cart.getOptionsId())
                                           .quantity(cart.getAmount())
                                           .price(cart.getPrice())
                                           .amount(cart.getAmount()*cart.getPrice())
                                           .build();
            
            List<CartOption> cartOptionList = cart.getOptionList();
            List<OrderOption> orderOptionList = new ArrayList<>();
            for (CartOption cartOption : cartOptionList) {
                OrderOption orderOption = OrderOption.builder()
                                                     .id(UUID.randomUUID().toString())
                                                     .optionItemId(cartOption.getOptionItemsId())
                                                     .orderItemId(orderItemId)
                                                     .name(cartOption.getName())
                                                     .build();
                orderOptionList.add(orderOption);
            }
            orderItem.setOptionList(orderOptionList);
            itemList.add(orderItem);
        }
        

        order.setItemList(itemList);
        title += title + "외" + (itemList.size() -1) + "건";
        order.setTitle(title);
        order.setUserId(userId);
        log.info("order: " + order);
        int result = orderService.insert(order);
        if (result > 0) {
            cartService.delete(userId);
            log.info("주문내역 생성 성공!!");
        }else{
            log.info("주문내역 생성 실패!!");
        }

        log.info("타이틀: " + title);
        log.info("오더아이디: " + orderId);
        log.info("총금액 : " + total);
        model.addAttribute("title", title);
        model.addAttribute("orderId", orderId);
        model.addAttribute("amount", total);
        return "checkout";
    }

    @RequestMapping(value = "/confirm")
    public ResponseEntity<JSONObject> confirmPayment(@RequestBody String jsonBody) throws Exception {
        log.info("결제성공 후 프로그램 DB에 연동 시도...");
        log.info(jsonBody);
        JSONParser parser = new JSONParser();
        String orderId;
        String amount;
        String paymentKey;
        try {
            // 클라이언트에서 받은 JSON 요청 바디입니다.
            JSONObject requestData = (JSONObject) parser.parse(jsonBody);
            paymentKey = (String) requestData.get("paymentKey");
            orderId = (String) requestData.get("orderId");
            amount = (String) requestData.get("amount");
        } catch (ParseException e) {
            throw new RuntimeException(e);
        };
        JSONObject obj = new JSONObject();
        obj.put("orderId", orderId);
        obj.put("amount", amount);
        obj.put("paymentKey", paymentKey);

        // 토스페이먼츠 API는 시크릿 키를 사용자 ID로 사용하고, 비밀번호는 사용하지 않습니다.
        // 비밀번호가 없다는 것을 알리기 위해 시크릿 키 뒤에 콜론을 추가합니다.
        String widgetSecretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
        Base64.Encoder encoder = Base64.getEncoder();
        byte[] encodedBytes = encoder.encode((widgetSecretKey + ":").getBytes(StandardCharsets.UTF_8));
        String authorizations = "Basic " + new String(encodedBytes);

        // 결제를 승인하면 결제수단에서 금액이 차감돼요.
        URL url = new URL("https://api.tosspayments.com/v1/payments/confirm");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestProperty("Authorization", authorizations);
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);

        OutputStream outputStream = connection.getOutputStream();
        outputStream.write(obj.toString().getBytes("UTF-8"));

        int code = connection.getResponseCode();
        boolean isSuccess = code == 200;

        InputStream responseStream = isSuccess ? connection.getInputStream() : connection.getErrorStream();

        // 결제 성공 및 실패 비즈니스 로직을 구현하세요.
        Reader reader = new InputStreamReader(responseStream, StandardCharsets.UTF_8);
        JSONObject jsonObject = (JSONObject) parser.parse(reader);
        
        responseStream.close();
        log.info("로그" + jsonObject.toJSONString());

        Payment payment = Payment.builder()
                                 .id(UUID.randomUUID().toString())
                                 .ordersId(orderId)
                                 .paymentMethod("카드")
                                 .build();
        

        
        if (isSuccess) {

            JSONObject responseJson = new JSONObject();
            // 결제 성공 처리 로직
            log.info("결제 성공: orderId={}, amount={}", orderId, amount);
            
            // 데이터베이스에 결제 상태 업데이트
            payment.setStatus("PAID");
            paymentService.insert(payment);
            
            responseJson.put("status", "success");
            responseJson.put("message", "Payment confirmed successfully.");
            return ResponseEntity.ok(responseJson);
        } else {
            
            log.error("결제 실패: orderId={}, code={}, message={}", orderId, code, jsonObject.get("message"));
            JSONObject responseJson = new JSONObject();
            // 결제 실패 처리 로직
            

            responseJson.put("status", "failure");
            responseJson.put("message", "Payment confirmation failed. Please try again.");
            return ResponseEntity.status(code).body(responseJson);
        }
    }
}
