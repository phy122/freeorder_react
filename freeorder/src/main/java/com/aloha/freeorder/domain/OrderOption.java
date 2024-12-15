package com.aloha.freeorder.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class OrderOption {
    
    private String id;
    private String optionItemsId;
    private String orderItemsId;
    private String name;
    private int price;
    private Date createdAt;
    private Date updatedAt;

}
