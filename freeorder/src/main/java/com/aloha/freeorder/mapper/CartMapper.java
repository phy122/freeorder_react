package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.domain.CartOption;

@Mapper
public interface CartMapper {
    
    // 조회
    public Cart select(String id) throws Exception;
    // 목록
    public List<Cart> list() throws Exception;
    // 해당 유저 장바구니 목록
    public List<Cart> listByUser(String usersId) throws Exception;
    // 등록
    public int insert(Cart cart) throws Exception;
    // 옵션 등록
    public int insertOption(CartOption cartOption) throws Exception;
    // 수정
    public int update(Cart cart) throws Exception;
    // 삭제
    public int delete(String id) throws Exception;

}
