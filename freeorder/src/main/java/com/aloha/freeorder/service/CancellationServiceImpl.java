package com.aloha.freeorder.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Cancellation;
import com.aloha.freeorder.mapper.CancellationMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CancellationServiceImpl implements CancellationService{
    
    @Autowired
    private CancellationMapper cancellationMapper;

    @Override
    public Cancellation select(String id) throws Exception {
        return cancellationMapper.select(id);
    }

    @Override
    public List<Cancellation> list() throws Exception {
        return cancellationMapper.list();
    }

    @Override
    public int insert(Cancellation cancellation) throws Exception {
        cancellation.setId(UUID.randomUUID().toString());
        return cancellationMapper.insert(cancellation);
    }

    @Override
    public int update(Cancellation cancellation) throws Exception {
        return cancellationMapper.update(cancellation);
    }

    @Override
    public int delete(String id) throws Exception {
        return cancellationMapper.delete(id);
    }
    
}
