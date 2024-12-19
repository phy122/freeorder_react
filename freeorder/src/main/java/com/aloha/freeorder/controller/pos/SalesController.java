package com.aloha.freeorder.controller.pos;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.aloha.freeorder.domain.SalesReport;
import com.aloha.freeorder.service.OrderService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/sales")
public class SalesController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/dailySales")
    public ResponseEntity<Map<String, Object>> getDailySales(@RequestParam String day) {
        try {
            SalesReport salesReport = orderService.totalDay("COMPLETED", day);
            Map<String, Object> response = new HashMap<>();
            response.put("totalSales", salesReport.getTotalPrice());
            response.put("totalRefund", salesReport.getCancelPrice());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            log.error("일별 매출 조회 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
