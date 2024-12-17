package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Payment {

    private String id;
    private String ordersId;
    private String paymentKey;
    private String paymentMethod;
    private String status;
    private Date paidAt;
    private Date createdAt;
    private Date updatedAt;

    private Order order;
}
