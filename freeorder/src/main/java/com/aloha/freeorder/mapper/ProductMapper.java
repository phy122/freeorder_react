package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Product;

@Mapper
public interface ProductMapper {
    
    // 상품 목록
    public List<Product> list() throws Exception;
    // 상품 등록
    public int insert(Product product) throws Exception;
    // 상품 수정
    public int update(Product product) throws Exception;
    // 상품 삭제
    public int delete(Long id) throws Exception;

}
