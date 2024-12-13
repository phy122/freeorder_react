package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Cart;

// public interface CartRepository extends JpaRepository<Cart, String> {
public interface CartRepository  {
    // List<Cart> findByUsersId(String userId); // 사용자 ID로 장바구니 검색
    // List<Cart> findByProductsIdAndUsersId(String productId, String userId); // 사용자별 특정 상품 검색
}