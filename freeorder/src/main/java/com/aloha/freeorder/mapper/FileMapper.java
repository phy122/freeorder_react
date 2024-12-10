package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Files;

@Mapper
public interface FileMapper {
    //파일 목록
    public List<Files> list(@Param("id") String id
                           ,@Param("table") String table) throws Exception;

    //파일 조회
    public Files select(String id) throws Exception;

    //썸네일 조회
    public Files thumb(String id) throws Exception;

    //상품 이미지 조회
    public Files proimg(String id) throws Exception;

    //파일 등록
    public int insert(Files file) throws Exception;

    //파일 삭제
    public int delete(String id) throws Exception;

    //파일 전체 삭제
    public int allDelete(@Param("id") String id
                        ,@Param("table") String table) throws Exception;
}
