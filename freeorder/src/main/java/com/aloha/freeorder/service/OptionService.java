package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Option;

public interface OptionService {

    public List<Option> list() throws Exception;
    
    public Option read(Long id) throws Exception;

    public int insert(Option option) throws Exception;

    public int update(Option option) throws Exception;

    public int delete(Long id) throws Exception;
    
}
