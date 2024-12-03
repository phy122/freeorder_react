package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Order {
    
    private Long id;
    private Long userId;
    private String title;
    private int totalQuantity;
    private int totalCount;
    private int totalPrice;
    private String status;
    private Date orderedAt;
    private Date createdAt;
    private Date updatedAt;

}
