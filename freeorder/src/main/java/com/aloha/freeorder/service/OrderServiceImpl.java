package com.aloha.freeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Order;
import com.aloha.freeorder.domain.OrderItem;
import com.aloha.freeorder.domain.OrderOption;
import com.aloha.freeorder.domain.SalesReport;
import com.aloha.freeorder.mapper.OrderMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public List<Order> list() throws Exception {
        List<Order> orderList = orderMapper.list();
        return orderList;
    }

    @Override
    public Order read(String id) throws Exception {
        Order order = orderMapper.read(id);
        return order;
    }

    @Override
    public int insert(Order order) throws Exception {
        List<OrderItem> orderItemsList = order.getItemList();
        for (OrderItem orderItem : orderItemsList) {
            orderMapper.insertItem(orderItem);
            List<OrderOption> orderOptionsList = orderItem.getOptionList();
            for (OrderOption orderOption : orderOptionsList) {
                orderMapper.insertOption(orderOption);
            }
        }
        log.info("주문내역 등록");
        order.setOrderNumber(countOrders() + 1); // 주문 번호 설정 - 영업 시작 시간 부터 수량만큼 증가
        int result = orderMapper.insert(order);
        return result;
    }

    @Override
    public int update(Order order) throws Exception {
        int result = orderMapper.update(order);
        return result;
    }

    @Override
    public int delete(String id) throws Exception {
        int result = orderMapper.delete(id);
        return result;
    }

    @Override
    public SalesReport totalMonth(String status, String day) throws Exception {
        return orderMapper.totalMonth(status, day);
    }

    @Override
    public SalesReport totalDay(String status, String day) throws Exception {
        return orderMapper.totalDay(status, day);
    }

    @Override
    public List<Order> listByUsersId(String usersId) throws Exception {
        return orderMapper.listByUsersId(usersId);
    }
    
    @Override
    public List<Order> listByStatus(String status) throws Exception {
        return orderMapper.listByStatus(status);
    }

    @Override
    public int countOrders() throws Exception {
        return orderMapper.countOrders();
    }
}
