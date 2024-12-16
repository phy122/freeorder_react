package com.aloha.freeorder.controller;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.aloha.freeorder.domain.SystemStatus;
import com.aloha.freeorder.service.SystemStatusService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
public class HomeController {
    

    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

    @Autowired
    private SystemStatusService systemStatusService;

    /**
     * 메인 페이지
     * @return
     */
    @GetMapping({"/", ""})
    public String home() {
        return "index";
    }

    /**
     * 로그인 페이지
     * @param error
     * @param model
     * @return
     */
    @GetMapping({"/login","/login/error"})
    public String login(@RequestParam(value = "error", required = false) String error, Model model) {
        model.addAttribute("error",error);
        return "login";
    }
    
    /**
     * 영업 시작 / 시작 종료 [비동기]
     * @param systemStatus
     * @return
     * @throws Exception
     */
    @PostMapping("/setting")
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
                
                // 로그 찍기: 시스템 종료 처리
                logger.info("System is ending. Status: {}, EndedAt: {}", status, systemStatus.getEndedAt());

                systemStatusService.insertLog(systemStatus); // 시스템 종료 로그 기록
                systemStatusService.updateSettingStatus(systemStatus); // 상태 업데이트
                responseText.put("text", "시스템 종료되었습니다.");
                return new ResponseEntity<>(responseText,HttpStatus.OK);
            } else {
                systemStatus.setStartedAt(new Timestamp(System.currentTimeMillis()));
                
                // 로그 찍기: 시스템 시작 처리
                logger.info("System is starting. Status: {}, StartedAt: {}", status, systemStatus.getStartedAt());
                
                systemStatusService.insertLog(systemStatus); // 시스템 시작 로그 기록
                systemStatusService.updateSettingStatus(systemStatus); // 상태 업데이트
                responseText.put("text", "시스템 시작되었습니다.");
                return new ResponseEntity<>(responseText,HttpStatus.OK);
            }

        } catch (DataAccessException e) {
            // 예외 발생 시 로그 찍기
            logger.error("Error occurred while toggling system status", e);
            return new ResponseEntity<>("시스템 변경중 오류 발생",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    /**
     * 영업 종료시 보여줄 페이지
     * @param param
     * @return
     */
    @GetMapping("/closed")
    public String closed() {
        return "views/closed";
    }
    
}
