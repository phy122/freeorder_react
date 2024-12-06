package com.aloha.freeorder.controller.pos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.service.NoticeService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/pos/notices")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;
    
    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("공지사항 목록 조회");
        try {
            List<Notice> noticeList = noticeService.list();
            return new ResponseEntity<>(noticeList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("공지사항 목록 조회 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(Notice notice) {
        log.info("공지사항 등록");
        int result = 0;
        try {
            List<Notice> noticeList = noticeService.list();
            if (noticeList.size() > 0) {
                result = noticeService.update(notice);
            }
            else{
                result = noticeService.insert(notice);
            }
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("공지사항 DB에 등록 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("공지사항 등록 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(Notice notice) {
        log.info("공지사항 수정");
        try {
            int result = noticeService.update(notice);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("공지사항 DB에서 수정 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("공지사항 수정 중 에러 발생...");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") String id) {
        log.info("공지사항 삭제");
        try {
            int result = noticeService.delete(id);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("공지사항 DB에서 삭제 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("공지사항 삭제 중 에러 발생...");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
