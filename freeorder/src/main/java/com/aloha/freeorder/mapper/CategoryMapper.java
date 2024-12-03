package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Category;

@Mapper
public interface CategoryMapper {

     public List<Category> list() throws Exception;

    public Category read(Long id) throws Exception;

    public int insert(Category category) throws Exception;

    public int update(Category category) throws Exception;

    public int delete(Long id) throws Exception;
    
}
