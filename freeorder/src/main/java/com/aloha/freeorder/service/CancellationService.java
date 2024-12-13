package com.aloha.freeorder.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Cancellation;

public interface CancellationService {
     // 조회
    public Cancellation select(String id) throws Exception;
    // 목록
    public List<Cancellation> list() throws Exception;
    // 등록
    public int insert(Cancellation cancellation) throws Exception;
    // 수정
    public int update(Cancellation cancellation) throws Exception;
    // 삭제
    public int delete(String id) throws Exception;
    // 결제 취소
    static void cancelPayment(@Param("paymentKey") String paymentKey,
                          @Param("ordersId") String ordersId,
                          @Param("reason") String reason) {
    }
    

}
