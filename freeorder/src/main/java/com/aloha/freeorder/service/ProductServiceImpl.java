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
    public List<Product> allList() throws Exception {
        return productMapper.allList();
    }

    @Override
    public List<Product> listByCate(Long categoryId) throws Exception {
        return productMapper.listByCate(categoryId);
    }

    @Override
    public Product select(Long id) throws Exception {
        return productMapper.select(id);
    }

    @Override
    public int insert(Product product) throws Exception {
        return productMapper.insert(product);
    }

    @Override
    public int update(Product product) throws Exception {
        return productMapper.update(product);
    }

    @Override
    public int delete(Long id) throws Exception {
        return productMapper.delete(id);
    }
    

}
