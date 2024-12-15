package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.domain.OptionItem;

public interface OptionService {

    // 목록
    public List<Option> list() throws Exception;
    
    // 조회
    public Option read(String id) throws Exception;

    // 등록
    public int insert(Option option) throws Exception;

    // 아이템등록
    public int insertItem(OptionItem optionItem) throws Exception;

    // 수정
    public int update(Option option) throws Exception;

    // 삭제
    public int delete(String id) throws Exception;

    // 아이템 삭제(해당 옵션아이디)
    public int deleteItem(String optionsId) throws Exception;
    
}
