package com.aloha.freeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.mapper.CartMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private CartMapper cartMapper;
    
    @Override
    public Cart select(Long id) throws Exception {
        return cartMapper.select(id);
    }

    @Override
    public List<Cart> list() throws Exception {
        return cartMapper.list();
    }

    @Override
    public int insert(Cart cart) throws Exception {
        return cartMapper.insert(cart);
    }

    @Override
    public int update(Cart cart) throws Exception {
        return cartMapper.update(cart);
    }

    @Override
    public int delete(Long id) throws Exception {
        return cartMapper.delete(id);
    }
    
}
