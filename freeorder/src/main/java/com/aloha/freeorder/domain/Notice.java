package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Notice {
    private String id;
    private String thumbnail;
    private String type;
    private String title;
    private String content;
    private Date createdAt;
    private Date updatedAt;
}
