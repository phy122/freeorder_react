package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Cancellation;

@Mapper
public interface CancellationMapper {
    // 조회
    public Cancellation select(Long id) throws Exception;
    // 목록
    public List<Cancellation> list() throws Exception;
    // 등록
    public int insert(Cancellation cancellation) throws Exception;
    // 수정
    public int update(Cancellation cancellation) throws Exception;
    // 삭제
    public int delete(Long id) throws Exception;
}
