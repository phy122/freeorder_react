package com.aloha.freeorder.service;

import java.util.List;

import com.aloha.freeorder.domain.Files;

public interface FileService {
    //파일 목록
    public List<Files> list(String id, String table) throws Exception;

    //파일 조회
    public Files select(String id) throws Exception;

    //썸네일 조회
    public Files thumb(String id) throws Exception;

    //파일 등록
    public int insert(Files file) throws Exception;

    //파일 삭제
    public int delete(String id) throws Exception;

    //파일 전체 삭제
    public int allDelete(String id, String table) throws Exception;
}
