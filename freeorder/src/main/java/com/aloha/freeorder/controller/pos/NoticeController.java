package com.aloha.freeorder.controller.pos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.service.NoticeService;

@RestController
@RequestMapping("/pos/notice")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @GetMapping("/list")
    public ResponseEntity<?> list() throws Exception {
        List<Notice> NoticeList = noticeService.list();
        return ResponseEntity.ok(NoticeList);
    }

    @GetMapping("/read")
    public ResponseEntity<?> read(@RequestParam("id") Long id) throws Exception {
        Notice notice = noticeService.read(id);
        return ResponseEntity.ok(notice);
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insertPro(@RequestBody Notice notice) throws Exception {
        int result = noticeService.insert(notice);
        if (result > 0) {
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @PostMapping("/update")
    public ResponseEntity<?> updatePro(@RequestBody Notice notice) throws Exception {
        int result = noticeService.update(notice);
        if(result > 0){
            return ResponseEntity.ok("seccess");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam("id") Long id) throws Exception {
        int result = noticeService.delete(id);
        if(result > 0){
            return ResponseEntity.ok("seccess");
        }
        return ResponseEntity.badRequest().body("error");
    }
    
}
