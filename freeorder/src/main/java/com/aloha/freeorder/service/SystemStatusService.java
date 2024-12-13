package com.aloha.freeorder.service;

import com.aloha.freeorder.domain.SystemStatus;
import org.springframework.dao.DataAccessException;

public interface SystemStatusService {

    public SystemStatus selectStatus() throws DataAccessException;

    public void updateSettingStatus(SystemStatus systemStatus) throws DataAccessException;

    public void insertLog(SystemStatus systemStatus) throws DataAccessException;
}
