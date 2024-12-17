package com.aloha.freeorder.domain;

import java.util.List;

import lombok.Data;

@Data
public class PaySearch {
    
    private String startDay;
    private String endDay;
    private List<String> paymentMethods;
    private Integer minPrice;
    private Integer maxPrice;

}
