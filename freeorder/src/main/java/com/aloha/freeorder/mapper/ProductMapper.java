package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Product;

@Mapper
public interface ProductMapper {
    

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
    // 드래그 앤 드롭 순서 저장
    public void updateProductOrder(@Param("id") String id, @Param("seq") int seq) throws Exception;
}
