package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class OrderItem {

    private String id;
    private String orderId;
    private String productId;
    private int quantity;
    private int price;
    private int amount;
    private Date createdAt;
    private Date updatedAt;

}
