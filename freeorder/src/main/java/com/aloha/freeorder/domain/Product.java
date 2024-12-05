package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Product {

    private String id;
    private String optionId;
    private String name;
    private String categoryId;
    private String description;
    private String content;
    private int price;
    private boolean stockCheck;
    private int stock;
    private int seq;
    private Date createdAt;
    private Date updatedAt;
    
}
