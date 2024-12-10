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
public class CartOption {
  private String id;
  private String cartsId;
  private String optionItemsId;
  private String name;
  private int price;
  private Date createdAt;
  private Date updatedAt;
}
