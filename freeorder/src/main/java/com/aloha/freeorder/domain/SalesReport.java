package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class SalesReport {
    
    private Date saleDate;          // 판매 날짜
    private int totalPrice;         // 총 판맥액
    private int salesCount;         // 판매 건수
    private int avgPriceBySales;    // 건당 판매 평균 금액
    private int cancelPrice;        // 취소 총 금액
    private int afterAmount;        // = 판매금액 - 취소금액


    // 결제타입별 금액
    private int cardAmount;
    private int cashAmount;
    private int simpleAmount;

}
