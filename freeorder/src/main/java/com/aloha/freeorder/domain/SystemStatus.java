package com.aloha.freeorder.domain;


import java.sql.Timestamp;

import lombok.Data;

@Data
public class SystemStatus {
    private String id;
    private String status;
    private Timestamp startedAt;
    private Timestamp endedAt;

    private String settingStatus;
}
