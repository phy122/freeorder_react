package com.aloha.freeorder.domain;

import lombok.Data;

@Data
public class PaySearch {
    
    private int date;
    private String startDay;
    private String endDay;
    private String paymentMethods;
    private Integer minPrice;
    private Integer maxPrice;

}
