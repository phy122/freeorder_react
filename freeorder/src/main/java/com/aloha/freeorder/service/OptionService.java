package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.domain.OptionItem;

public interface OptionService {

    public List<Option> list() throws Exception;
    
    public Option read(String id) throws Exception;

    public int insert(Option option) throws Exception;

    public int update(Option option) throws Exception;

    public int delete(String id) throws Exception;
    
    public int insertItem(OptionItem optionItem) throws Exception;

}
