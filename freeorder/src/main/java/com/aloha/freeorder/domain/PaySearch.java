package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class PaySearch {
    
    private Date startDay;
    private Date endDay;
    private String paymentMethod;
    private int price;

}
