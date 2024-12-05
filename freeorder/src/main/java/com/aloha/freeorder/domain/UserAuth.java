package com.aloha.freeorder.domain;

import lombok.Data;

@Data
public class UserAuth {
    private String id;
    private String username;
    private String auth;
}