package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Product;

public interface ProductService {

    // 상품 목록
    public List<Product> list() throws Exception;
    // 상품 등록
    public int insert(Product product) throws Exception;
    // 
    public int update(Product product) throws Exception;
    public int delete(Long id) throws Exception;

}
