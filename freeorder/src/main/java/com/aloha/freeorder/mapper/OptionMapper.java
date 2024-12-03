package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.freeorder.domain.Option;

@Mapper
public interface OptionMapper {

    public List<Option> list() throws Exception;
    
    public Option read(Long id) throws Exception;

    public int insert(Option option) throws Exception;

    public int update(Option option) throws Exception;

    public int delete(Long id) throws Exception;
    
}
