package com.aloha.freeorder.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.security.constants.SecurityConstants;
import com.aloha.freeorder.security.props.JwtProps;
import com.aloha.freeorder.domain.AuthenticationRequest;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;



/**
 * JWT 토큰 생성
 *  - 로그인 요청 ➡ 인증 ➡ JWT 토큰 생성
 * 
 * JWT 토큰 해석
 *  - 인증 자원 요청 ➡ JWT 토큰 해석
 */

@Slf4j
@RestController
public class LoginController {

    @Autowired private JwtProps jwtProps;  // secretKey 

    /**
     * JWT 토큰 해석
     * 💍➡📨 JWT
     * @param header
     * @return
     */
    @GetMapping("/user")
    public ResponseEntity<?> user(@RequestHeader(name = "Authorization") String authorization) {
        log.info("Authrization : " + authorization);

        // Authrization : "Bearer " + 💍(jwt)
        String jwt = authorization.substring(7);
        log.info("jwt : " + jwt);

        String secretKey = jwtProps.getSecretKey();
        byte[] signingKey = secretKey.getBytes();

        // JWT 토큰 해석 : 💍 ➡ 👩‍💼
        Jws<Claims> parsedToken = Jwts.parser()
                                        .verifyWith(Keys.hmacShaKeyFor(signingKey))
                                        .build()
                                        .parseSignedClaims(jwt);

        String username = parsedToken.getPayload().get("uid").toString();
        log.info("username : " + username);

        Object roles = parsedToken.getPayload().get("rol");
        List<String> roleList = (List<String>) roles;
        log.info("roles : " + roles);
        log.info("roleList : " + roleList);

        return new ResponseEntity<>(parsedToken.toString(), HttpStatus.OK);
    }
    

}