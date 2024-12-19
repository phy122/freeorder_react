package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.OrderItem;
import com.aloha.freeorder.domain.OrderOption;
import com.aloha.freeorder.domain.SalesReport;

@Mapper
public interface OrderMapper {
    
    // 주문 목록
    public List<Order> list() throws Exception;
    
    // 주문 목록(상태)
    public List<Order> listByStatus(String status) throws Exception;
    
    // 주문 목록(유저아이디)
    public List<Order> listByUsersId(String usersId) throws Exception;
    
    // 주문 조회
    public Order read(String id) throws Exception;
    
    // 주문 등록
    public int insert(Order order) throws Exception;
    
    // 아이템 등록
    public int insertItem(OrderItem orderItem) throws Exception;
    
    // 옵션 등록
    public int insertOption(OrderOption orderOption) throws Exception;
    
    // 주문 수정
    public int update(Order order) throws Exception;
    
    // 주문 삭제
    public int delete(String id) throws Exception;
    
    // 월별 매출 조회
    public SalesReport totalMonth(@Param("status") String status, @Param("day") String day);
    
    // 일별 매출 조회
    public SalesReport totalDay(@Param("status") String status, @Param("day") String day);
    
    // 주문수 조회(주문번호 부여)
    public int countOrders() throws Exception;
}
