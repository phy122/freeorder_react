package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.domain.OptionItem;

@Mapper
public interface OptionMapper {

    public List<Option> list() throws Exception;
    
    public Option read(String id) throws Exception;

    public int insert(Option option) throws Exception;

    public int update(Option option) throws Exception;

    public int delete(String id) throws Exception;

    public int insertItem(OptionItem optionItem) throws Exception;
    
    // 새로운 메서드 추가
    public List<OptionItem> findItemsByOptionId(@Param("optionId") String optionId) throws Exception;
}
