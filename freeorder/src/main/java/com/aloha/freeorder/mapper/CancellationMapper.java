package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.aloha.freeorder.domain.Cancellation;
import com.aloha.freeorder.domain.Payment;

@Mapper
public interface CancellationMapper {
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
    void cancelPayment(@Param("ordersId") String userId,
                       @Param("paymentKey") String paymentKey,
                       @Param("reason") String reason);

    // 결제 정보 조회
    @Select("SELECT * FROM payment WHERE payment_key = #{paymentKey} AND ordersId = #{ordersId}")
    Payment findPaymentByKeyAndId(@Param("paymentKey") String paymentKey, @Param("ordersId") String userId);
    // 결제 취소 정보 업데이트
    @Update("UPDATE payment SET is_confirmed = #{isConfirmed}, reason = #{reason} WHERE paymet_Key = #{paymentKey}")
    int updatePamentCancelInfo(@Param("paymentKey") String paymentKey,
                               @Param("isConfirmed") int isConfirmed,
                               @Param("reason") String reason);

}
