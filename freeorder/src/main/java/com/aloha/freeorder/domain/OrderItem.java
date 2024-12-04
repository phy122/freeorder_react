package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class OrderItem {

    private Long id;
    private Long orderId;
    private Long productId;
    private int quantity;
    private int price;
    private int amount;
    private Date createdAt;
    private Date updatedAt;

}
