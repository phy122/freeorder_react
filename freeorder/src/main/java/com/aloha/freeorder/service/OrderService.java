package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Order;

public interface OrderService {
        
    // 주문 목록
    public List<Order> list() throws Exception;
    // 주문 조회
    public Order read(String id) throws Exception;
    // 주문 등록
    public int insert(Order order) throws Exception;
    // 주문 수정
    public int update(Order order) throws Exception;
    // 주문 삭제
    public int delete(String id) throws Exception;


}
