package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Cancellation {
    private Long id;
    private Long ordersId;
    private String status;
    private String reason;
    private String refundedAmount;
    private boolean isConfirmed;
    private boolean isRefund;
    private String accountNumber;
    private String bankName;
    private String depositor;
    private Date canceledAt;
    private Date compleatedAt;
    private Date createdAt;
    private Date updatedAt;
}
