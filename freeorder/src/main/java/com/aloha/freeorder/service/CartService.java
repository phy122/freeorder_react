package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Cart;

public interface CartService {
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
