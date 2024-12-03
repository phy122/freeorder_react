package com.aloha.freeorder.mapper;

import java.util.List;

import com.aloha.freeorder.domain.Product;

public interface ProductMapper {
    
    public List<Product> list(Product product) throws Exception;
    
}
