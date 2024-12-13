package com.aloha.freeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.mapper.NoticeMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NoticeServiceImpl implements NoticeService {

    @Autowired
    private NoticeMapper noticeMapper;

    @Override
    public List<Notice> list() throws Exception {
        List<Notice> noticeList = noticeMapper.list();
        return noticeList;

    }

    @Override
    public Notice read() throws Exception {
        Notice notice = noticeMapper.read();
        return notice;
    }

    @Override
    public Notice select(String id) throws Exception {
        return noticeMapper.select(id);
    }

    @Override
    public int insert(Notice notice) throws Exception {
        int result = noticeMapper.insert(notice);
        return result;
    }

    @Override
    public int update(Notice notice) throws Exception {
        int result = noticeMapper.update(notice);
        return result;
    }
    

    @Override
    public int delete(String id) throws Exception {
        int result = noticeMapper.delete(id);
        return result;
    }
    
}
