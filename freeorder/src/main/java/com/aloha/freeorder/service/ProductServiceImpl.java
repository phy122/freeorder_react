package com.aloha.freeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public List<Product> list() throws Exception {
        List<Product> productList = productMapper.list();
        return productList;
    }

    @Override
    public int insert(Product product) throws Exception {
        int result = productMapper.insert(product);
        return result;
    }

    @Override
    public int update(Product product) throws Exception {
        int result = productMapper.update(product);
        return result;
    }

    @Override
    public int delete(Long id) throws Exception {
        int result = productMapper.delete(id);
        return result;
    }

}
