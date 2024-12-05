package com.aloha.freeorder.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Files;
import com.aloha.freeorder.mapper.FileMapper;

@Service
public class FileServiceImpl implements FileService{

    @Autowired
    private FileMapper fileMapper;

    @Override
    public List<Files> list(String id, String table) throws Exception {
        return fileMapper.list(id, table);
    }

    @Override
    public Files select(String id) throws Exception {
        return fileMapper.select(id);
    }

    @Override
    public int insert(Files file) throws Exception {
        file.setId(UUID.randomUUID().toString());
        return fileMapper.insert(file);
    }

    @Override
    public int delete(String id) throws Exception {
        return fileMapper.delete(id);
    }

    @Override
    public int allDelete(String id, String table) throws Exception {
        return fileMapper.allDelete(id, table);
    }
    
}
