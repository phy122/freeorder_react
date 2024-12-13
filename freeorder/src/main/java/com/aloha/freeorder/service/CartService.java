package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.domain.CartOption;

public interface CartService {
    // 조회
    public Cart select(String id) throws Exception;
    // 목록
    public List<Cart> list(String usersId) throws Exception;
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
    // 장바구니 옵션 삭제
    public int deleteOption(String id) throws Exception;
    // 결제시 해당 내역 삭제
    public int allDeleteByUserId(String usersId) throws Exception;
    // 결제시 해당 내역 장바구니 옵션 삭제
    public int allDeleteOptionByUserId(String usersId) throws Exception;
    // 
    // 장바구니 옵션 비교
    public static boolean areOptionListsEqual(List<CartOption> list1, List<CartOption> list2) {
        if (list1.size() != list2.size()) {
            return false; // 크기가 다르면 다른 옵션 세트
        }

        // 각 옵션의 ID를 기준으로 비교 (정렬이 다를 수 있으니 정렬 후 비교)
        return list1.stream()
                .map(CartOption::getOptionItemsId)
                .sorted()
                .toList()
                .equals(list2.stream()
                             .map(CartOption::getOptionItemsId)
                             .sorted()
                             .toList());
    }
}
