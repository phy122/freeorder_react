package com.aloha.freeorder.controller.pos;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.SystemStatus;
import com.aloha.freeorder.service.SystemStatusService;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@RestController
@RequestMapping("/servers")
@CrossOrigin("*")
public class ServerController {
    
    @Autowired
    private SystemStatusService statusService;
    
    @GetMapping()
    public ResponseEntity<?> get() {
        log.info("시스템정보 조회");
        try {
            SystemStatus systemStatus = statusService.selectStatus();
            return new ResponseEntity<>(systemStatus, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 영업 시작 / 시작 종료 [비동기]
     * @param systemStatus
     * @return
     * @throws Exception
     */
    @PostMapping()
    public ResponseEntity<?> systemStatus(@RequestBody SystemStatus systemStatus) throws Exception{
        String id = UUID.randomUUID().toString();
        String status = systemStatus.getStatus();
        systemStatus.setId(id);
        log.info("시스템상태 : "+ systemStatus.toString());
        Map<String, String> responseText = new HashMap<>();
        
        try {
            // 상태에 따라 시스템 시작/종료 처리
            if ("END".equals(status)) {
                systemStatus.setEndedAt(new Timestamp(System.currentTimeMillis()));
                statusService.insertLog(systemStatus); // 시스템 종료 로그 기록
                statusService.updateSettingStatus(systemStatus); // 상태 업데이트
                responseText.put("text", "시스템이 종료되었습니다.");
                return new ResponseEntity<>(responseText,HttpStatus.OK);
            } else {
                systemStatus.setStartedAt(new Timestamp(System.currentTimeMillis()));
                statusService.insertLog(systemStatus); // 시스템 시작 로그 기록
                statusService.updateSettingStatus(systemStatus); // 상태 업데이트
                responseText.put("text", "시스템이 시작되었습니다.");
                return new ResponseEntity<>(responseText,HttpStatus.OK);
            }

        } catch (DataAccessException e) {
            // 예외 발생 시 로그 찍기
            log.error("상태 변화중 에러 발생", e);
            return new ResponseEntity<>("시스템 변경중 오류 발생",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
}
