package com.aloha.freeorder.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aloha.freeorder.domain.Files;

@Mapper
public interface FileMapper {
    //파일 목록
    public List<Files> list(@Param("id") Long id
                           ,@Param("table") String table) throws Exception;

    //파일 조회
    public Files select(Long id) throws Exception;

    //파일 등록
    public int insert(Files file) throws Exception;

    //파일 삭제
    public int delete(Long id) throws Exception;

    //파일 전체 삭제
    public int allDelete(@Param("id") Long id
                        ,@Param("table") String table) throws Exception;
}
