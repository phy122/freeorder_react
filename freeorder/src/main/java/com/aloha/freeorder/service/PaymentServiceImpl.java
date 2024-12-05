package com.aloha.freeorder.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Payment;
import com.aloha.freeorder.mapper.PaymentMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentMapper paymentMapper;
    
    @Override
    public Payment select(String id) throws Exception {
        return paymentMapper.select(id);
    }

    @Override
    public List<Payment> list() throws Exception {
        return paymentMapper.list();
    }

    @Override
    public int insert(Payment payment) throws Exception {
        payment.setId(UUID.randomUUID().toString());
        return paymentMapper.insert(payment);
    }

    @Override
    public int update(Payment payment) throws Exception {
        return paymentMapper.update(payment);
    }

    @Override
    public int delete(String id) throws Exception {
        return paymentMapper.delete(id);
    }
    
}
