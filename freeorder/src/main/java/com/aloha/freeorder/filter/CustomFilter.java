package com.aloha.freeorder.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jms.JmsProperties.Listener.Session;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.filter.OncePerRequestFilter;

import com.aloha.freeorder.domain.SystemStatus;
import com.aloha.freeorder.service.SystemStatusService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Component
public class CustomFilter extends OncePerRequestFilter {

    @Autowired
    private SystemStatusService statusService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {
        
        // 현재경로
        String requestURI = request.getRequestURI();
        if (requestURI.contains("/qr")) { // /qr 경로에만 적용
            // 세션
            HttpSession session = request.getSession();
            String usersId = (String) session.getAttribute("id");
            if (usersId == null || usersId.equals("")) {
                response.sendRedirect("/qr/main");
            }
            // statusService 에서 서버 상태 불러오기
            SystemStatus systemStatus = statusService.selectStatus();
            String status = systemStatus.getStatus();
            if (status.equals("END")) {
                response.sendRedirect("/closed");
            }
        }

        filterChain.doFilter(request, response);
    }

}
