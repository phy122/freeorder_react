package com.aloha.freeorder.domain;

import lombok.Data;

@Data
public class PaySearch {
    
    private String startDay;
    private String endDay;
    private String paymentMethod;
    private int price;

}
