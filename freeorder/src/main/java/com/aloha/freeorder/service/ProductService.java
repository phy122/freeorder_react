package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Product;

public interface ProductService {

    public List<Product> list() throws Exception;
    public int insert(Product product) throws Exception;
    public int update(Product product) throws Exception;
    public int delete(String id) throws Exception;

}
