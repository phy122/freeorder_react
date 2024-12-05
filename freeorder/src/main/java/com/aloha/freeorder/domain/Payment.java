package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Payment {

    private String id;
    private String ordersId;
    private String paymentMethod;
    private String status;
    private Date paidAt;
    private Date createdAt;
    private Date updatedAt;

}
