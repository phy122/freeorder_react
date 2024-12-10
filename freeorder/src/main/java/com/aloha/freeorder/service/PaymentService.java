package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.PaySearch;
import com.aloha.freeorder.domain.Payment;

public interface PaymentService {
     // 조회
    public Payment select(String id) throws Exception;
    // 목록
    public List<Payment> list() throws Exception;
    // 목록 검색
    public List<Payment> listByOption(PaySearch paySearch) throws Exception;
    // 등록
    public int insert(Payment payment) throws Exception;
    // 수정
    public int update(Payment payment) throws Exception;
    // 삭제
    public int delete(String id) throws Exception;
    // TossPay
    public void updatePaymentStatus(String id, String status);
}
