package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.SalesReport;

public interface OrderService {
        
    // 주문 목록
    public List<Order> list() throws Exception;
    // 주문 목록(유저아이디)
    List<Order> listByUsersId(String usersId) throws Exception;
    // 주문 조회
    public Order read(String id) throws Exception;
    // 주문 등록
    public int insert(Order order) throws Exception;
    // 주문 수정
    public int update(Order order) throws Exception;
    // 주문 삭제
    public int delete(String id) throws Exception;
    // 월별 매출 조회
    public SalesReport totalMonth(String status, String day) throws Exception;
    // 일별 매출 조회
    public SalesReport totalDay(String status, String day) throws Exception;

}
