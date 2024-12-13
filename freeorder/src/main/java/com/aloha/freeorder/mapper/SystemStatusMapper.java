package com.aloha.freeorder.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;

import com.aloha.freeorder.domain.SystemStatus;

@Mapper
public interface SystemStatusMapper {

    public SystemStatus selectStatus() throws DataAccessException;
    
    public void updateSettingStatus(SystemStatus system) throws DataAccessException;

    public void insertLog(SystemStatus system) throws DataAccessException;
}
