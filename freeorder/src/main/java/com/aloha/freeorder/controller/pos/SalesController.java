package com.aloha.freeorder.controller.pos;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<?> getDailySales(@RequestParam("day") String day) throws Exception {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date date = sdf.parse(day);
        try {
            SalesReport salesReport = orderService.totalDay("COMPLETED", day);
            Map<String, Object> response = new HashMap<>();
            if (salesReport == null) {
                response.put("totalSales", 0);
                response.put("totalRefund", 0);
            }
            else{
                response.put("totalSales", salesReport.getTotalSales());
                response.put("totalRefund", salesReport.getCancelPrice());
            }
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            log.error("일별 매출 조회 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/totalMonthSales")
    public ResponseEntity<?> getMonthSales(@RequestParam("day") String day) throws Exception {
        try {
            SalesReport salesReport = orderService.totalMonth("COMPLETED", day);
            Map<String, Object> response = new HashMap<>();
            if (salesReport == null) {
                response.put("totalSales", 0);
                response.put("totalRefund", 0);
            }
            else{
                response.put("totalSales", salesReport.getTotalSales());
                response.put("totalRefund", salesReport.getCancelPrice());
            }
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            log.error("월별 매출 조회 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
