package com.aloha.freeorder.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Product;
import com.aloha.freeorder.mapper.ProductMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public List<Product> allList() throws Exception {
        return productMapper.allList();
    }

    @Override
    public List<Product> listByCate(String categoryId) throws Exception {
        return productMapper.listByCate(categoryId);
    }

    @Override
    public Product select(String id) throws Exception {
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
    public int delete(String id) throws Exception {
        return productMapper.delete(id);
    }
    
    @Override
    public void updateProductOrder(List<Product> productList) throws Exception {
        for (Product product : productList) {
            productMapper.updateProductOrder(product.getId(), product.getSeq());
        }
    }
}   
