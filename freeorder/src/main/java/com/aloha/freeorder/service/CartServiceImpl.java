package com.aloha.freeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Cart;
import com.aloha.freeorder.domain.CartOption;
import com.aloha.freeorder.mapper.CartMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private CartMapper cartMapper;
    
    @Override
    public Cart select(String id) throws Exception {
        return cartMapper.select(id);
    }

    @Override
    public List<Cart> list(String usersId) throws Exception {
        return cartMapper.list(usersId);
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
    public int updateAmount(Cart cart) throws Exception {
        return cartMapper.updateAmount(cart);
    }

    @Override
    public int delete(String id) throws Exception {
        return cartMapper.delete(id);
    }

    @Override
    public List<Cart> listByUser(String usersId) throws Exception {
        return cartMapper.listByUser(usersId);
    }
    @Override
    public List<Cart> ListByUsersIdAndProductsId(String usersId, String productId) throws Exception {
        return cartMapper.ListByUsersIdAndProductsId(usersId,productId);
    }

    @Override
    public int insertOption(CartOption cartOption) throws Exception {
        return cartMapper.insertOption(cartOption);
    }

    @Override
    public int deleteOption(String id) throws Exception {
        return cartMapper.deleteOption(id);
    }

    @Override
    public int allDeleteByUserId(String usersId) throws Exception {
        return cartMapper.allDeleteByUserId(usersId);
    }
    
    @Override
    public int allDeleteOptionByUserId(String usersId) throws Exception {
        return cartMapper.allDeleteOptionByUserId(usersId);
    }

    
    
}
