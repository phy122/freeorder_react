package com.aloha.freeorder.controller;

import java.sql.Timestamp;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
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

    @GetMapping({"/", ""})
    public String home() {
        return "index";
    }

    @GetMapping({"/login","/login/error"})
    public String login(@RequestParam(value = "error", required = false) String error, Model model) {
        model.addAttribute("error",error);
        return "login";
    }
    

    @PostMapping("/setting")
    public String systemStatus(@RequestBody SystemStatus systemStatus) {
        String id = UUID.randomUUID().toString();
        String status = systemStatus.getStatus();
        systemStatus.setId(id);
        try {
            log.info("영업 시작 버튼이 클릭되었습니다.");

            // 상태에 따라 시스템 시작/종료 처리
            if ("START".equals(status)) {
                systemStatus.setStatus("END");
                systemStatus.setEndedAt(new Timestamp(System.currentTimeMillis()));

                // 로그 찍기: 시스템 종료 처리
                logger.info("System is ending. Status: {}, EndedAt: {}", status, systemStatus.getEndedAt());

                systemStatusService.insertLog(systemStatus); // 시스템 종료 로그 기록
                systemStatusService.updateSettingStatus(systemStatus); // 상태 업데이트
                return "시스템 종료되었습니다.";
            } else {
                systemStatus.setStatus("START");
                systemStatus.setStartedAt(new Timestamp(System.currentTimeMillis()));

                // 로그 찍기: 시스템 시작 처리
                logger.info("System is starting. Status: {}, StartedAt: {}", status, systemStatus.getStartedAt());

                systemStatusService.insertLog(systemStatus); // 시스템 시작 로그 기록
                systemStatusService.updateSettingStatus(systemStatus); // 상태 업데이트
                return "시스템 시작되었습니다.";
            }

        } catch (DataAccessException e) {
            // 예외 발생 시 로그 찍기
            logger.error("Error occurred while toggling system status", e);
            return "시스템 상태 토글 중 오류가 발생했습니다.";
        }
    }
}
