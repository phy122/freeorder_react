package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Product;

public interface ProductService {


    // 상품 목록 전체 조회
    public List<Product> allList() throws Exception;
    // 상품 목록 카테고리 조회
    public List<Product> listByCate(String categoryId) throws Exception;
    // 상품 조회
    public Product select(String id) throws Exception;
    // 상품 등록
    public int insert(Product product) throws Exception;
    // 상품 수정
    public int update(Product product) throws Exception;
    // 상품 삭제
    public int delete(String id) throws Exception;

}