package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Notice;

public interface NoticeService {

    public List<Notice> list() throws Exception;

    public Notice read(Long id) throws Exception;

    public int insert(Notice notice) throws Exception;

    public int update(Notice notice) throws Exception;

    public int delete(Long id) throws Exception;
    
}
