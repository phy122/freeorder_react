package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Cart {
    private String id;
    private String productsId;
    private int amount;
    private int price;
    private Date createdAt;
    private Date updatedAt;
}
