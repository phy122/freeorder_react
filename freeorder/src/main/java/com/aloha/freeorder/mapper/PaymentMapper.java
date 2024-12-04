package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Payment;

@Mapper
public interface PaymentMapper {
    
    // 조회
    public Payment select(Long id) throws Exception;
    // 목록
    public List<Payment> list() throws Exception;
    // 등록
    public int insert(Payment payment) throws Exception;
    // 수정
    public int update(Payment payment) throws Exception;
    // 삭제
    public int delete(Long id) throws Exception;
}
