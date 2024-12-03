package com.aloha.freeorder.domain;

import lombok.Data;

@Data
public class UserAuth {
    private Long id;
    private String username;
    private String auth;
}