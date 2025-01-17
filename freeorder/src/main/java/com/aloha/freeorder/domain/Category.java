package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Category {
    private String id;
    private String name;
    private String code;
    private int seq;
    private Date createdAt;
    private Date updatedAt;
}
