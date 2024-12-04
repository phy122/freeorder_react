package com.aloha.freeorder.controller.pos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.freeorder.domain.Option;
import com.aloha.freeorder.service.OptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




/**
 * REST 형식 컨트롤러
 * CRUD 비동기 처리
 * 
 */
@RestController
@RequestMapping("/pos/options")
public class OptionController {

    @Autowired
    private OptionService optionService;

    @GetMapping("/list")
    public ResponseEntity<?> list() throws Exception {
        List<Option> optionList = optionService.list();
        return ResponseEntity.ok(optionList);
    }

    @GetMapping("/read")
    public ResponseEntity<?> read(@RequestParam("id") Long id) throws Exception {
        Option option = optionService.read(id);
        return ResponseEntity.ok(option);
    }

    @PostMapping("/insert")
    public ResponseEntity<?> insert(@RequestBody Option option) throws Exception {
        int result = optionService.insert(option);
        if(result > 0){
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Option option) throws Exception {
        int result = optionService.update(option);
        if(result > 0){
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam("id") Long id) throws Exception {
        int result = optionService.delete(id);
        if(result > 0){
            return ResponseEntity.ok("success");
        }
        return ResponseEntity.badRequest().body("error");
    }
    
    


    
    
}
