package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Category;

@Mapper
public interface CategoryMapper {

     public List<Category> list() throws Exception;

    public Category read(String id) throws Exception;

    public int insert(Category category) throws Exception;

    public int update(Category category) throws Exception;

    public int delete(String id) throws Exception;

    public void updateCategoryOrder(@Param("id") String id, @Param("seq") int seq) throws Exception;
}
