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

import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.service.OptionService;

import lombok.extern.slf4j.Slf4j;




/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@Slf4j
@RestController
@RequestMapping("/pos/options")
public class OptionController {

    @Autowired
    private OptionService optionService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("옵션 목록 조회");
        try {
            List<Option> optionList = optionService.list();
            return new ResponseEntity<>(optionList, HttpStatus.OK);
        } catch (Exception e) {
            log.error("옵션 목록 조회 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable("id") Long id) {
        log.info("옵션 조회");
        try {
            Option option = optionService.read(id);
            return new ResponseEntity<>(option, HttpStatus.OK);
        } catch (Exception e) {
            log.info("옵션 조회 중 오류 발생...");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(Option option) {
        log.info("옵션 등록");
        try {
            int result = optionService.insert(option);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("옵션 DB에 등록 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);    
            }
        } catch (Exception e) {
            log.error("옵션 등록 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(Option option) {
        log.info("옵션 수정");
        try {
            int result = optionService.update(option);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("옵션 DB에서 수정 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);    
            }
        } catch (Exception e) {
            log.error("옵션 수정 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable("id") Long id) {
        log.info("옵션 삭제");
        try {
            int result = optionService.delete(id);
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("옵션 DB에서 삭제 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);    
            }
        } catch (Exception e) {
            log.error("옵션 삭제 중 에러 발생", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
