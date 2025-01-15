package com.aloha.freeorder.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@Controller
public class HomeController {
    


    /**
     * 메인 페이지
     * @return
     */
    @GetMapping({"/", ""})
    public String home() {
        return "index";
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
