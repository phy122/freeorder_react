package com.aloha.freeorder.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.mapper.NoticeMapper;

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
    public Notice read(String id) throws Exception {
        Notice notice = noticeMapper.read(id);
        return notice;
    }

    @Override
    public int insert(Notice notice) throws Exception {
        notice.setId(UUID.randomUUID().toString());
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
