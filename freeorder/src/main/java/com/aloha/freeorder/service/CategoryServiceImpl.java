package com.aloha.freeorder.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Category;
import com.aloha.freeorder.mapper.CategoryMapper;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public List<Category> list() throws Exception {

        List<Category> categoryList = categoryMapper.list();
        return categoryList;
    }

    @Override
    public Category read(String id) throws Exception {

        Category category = categoryMapper.read(id);
        return category;
    }

    @Override
    public int insert(Category category) throws Exception {
        category.setId(UUID.randomUUID().toString());
        int result = categoryMapper.insert(category);
        return result;
    }

    @Override
    public int update(Category category) throws Exception {
        int result = categoryMapper.update(category);
        return result;
    }

    @Override
    public int delete(String id) throws Exception {
        int result = categoryMapper.delete(id);
        return result;
    }
    
}
