package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Cart;

@Mapper
public interface CartMapper {
    
    // 조회
    public Cart select(Long id) throws Exception;
    // 목록
    public List<Cart> list() throws Exception;
    // 등록
    public int insert(Cart cart) throws Exception;
    // 수정
    public int update(Cart cart) throws Exception;
    // 삭제
    public int delete(Long id) throws Exception;

}
