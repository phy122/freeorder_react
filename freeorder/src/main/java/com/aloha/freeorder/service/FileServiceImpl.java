package com.aloha.freeorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.Files;
import com.aloha.freeorder.mapper.FileMapper;

@Service
public class FileServiceImpl implements FileService{

    @Autowired
    private FileMapper fileMapper;

    @Override
    public List<Files> list(Long id, String table) throws Exception {
        return fileMapper.list(id, table);
    }

    @Override
    public Files select(Long id) throws Exception {
        return fileMapper.select(id);
    }

    @Override
    public int insert(Files file) throws Exception {
        return fileMapper.insert(file);
    }

    @Override
    public int delete(Long id) throws Exception {
        return fileMapper.delete(id);
    }

    @Override
    public int allDelete(Long id, String table) throws Exception {
        return fileMapper.allDelete(id, table);
    }
    
}
