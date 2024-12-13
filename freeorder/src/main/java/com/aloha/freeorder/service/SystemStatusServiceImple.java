package com.aloha.freeorder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.aloha.freeorder.domain.SystemStatus;
import com.aloha.freeorder.mapper.SystemStatusMapper;

@Service
public class SystemStatusServiceImple implements SystemStatusService {

    @Autowired
    private SystemStatusMapper systemStatusMapper;

    // 시스템 상태 업데이트
    @Override
    public void updateSettingStatus(SystemStatus systemStatus) throws DataAccessException {
        systemStatusMapper.updateSettingStatus(systemStatus);
    }

    // 로그 추가
    @Override
    public void insertLog(SystemStatus systemStatus) throws DataAccessException {
        systemStatusMapper.insertLog(systemStatus);
    }

    // 설정 상태 조회
    @Override
    public SystemStatus selectStatus() throws DataAccessException {
        return systemStatusMapper.selectStatus();
    }
}
