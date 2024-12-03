package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Category {
    private Long id;
    private String code;
    private String name;
    private int seq;
    private Date createdAt;
    private Date updatedAt;
}
