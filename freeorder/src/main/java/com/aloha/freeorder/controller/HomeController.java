package com.aloha.freeorder.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.aloha.freeorder.service.SystemStatusService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
public class HomeController {
    

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
     * 영업 종료시 보여줄 페이지
     * @param param
     * @return
     */
    @GetMapping("/closed")
    public String closed() {
        return "views/closed";
    }
    
}
