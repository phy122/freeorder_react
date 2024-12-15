package com.aloha.freeorder.controller.pos;

import java.io.File;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aloha.freeorder.domain.Files;
import com.aloha.freeorder.domain.Notice;
import com.aloha.freeorder.service.FileService;
import com.aloha.freeorder.service.NoticeService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/pos/notices")
public class NoticeController {

    @Autowired
    private NoticeService noticeService;
    
    @Autowired
    private FileService fileService;
    
    @Value("${upload.dir}")        // application.properties 에서 지정한 업로드 경로 가져옴
    private String uploadPath;

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
        log.info("공지사항/프로모션 등록");
        log.info(notice.toString());
        int result = 0;
        // 아이디생성
        String id = UUID.randomUUID().toString();
        notice.setId(id);
        try {
            if (notice.getType().equals("notice")) {
                Notice readNotice = noticeService.read();

                if (readNotice != null) {
                    notice.setId(readNotice.getId());
                    result = noticeService.update(notice);
                }
                else{
                    result = noticeService.insert(notice);
                }
            }
            else {
                notice.setType("promotion");
                // 썸네일 업로드
                String thumbPath = uploadPath + notice.getThumbFile().getName();
                notice.setThumbnail(thumbPath);
                Files thumbFiles = new Files();
                thumbFiles.setFile(notice.getThumbFile());
                thumbFiles.setMain(false);
                thumbFiles.setParentId(id);
                thumbFiles.setParentTable("notice");
                upload(thumbFiles);

                // 컨텐츠파일 업로드
                Files contentFiles = new Files();
                contentFiles.setFile(notice.getContentFile());
                contentFiles.setMain(true);
                contentFiles.setParentId(id);
                contentFiles.setParentTable("notice");
                upload(contentFiles);

                result = noticeService.insert(notice);
            }
            if( result > 0 )
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            else{
                log.info("공지사항/프로모션 DB에 등록 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("공지사항/프로모션 등록 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(Notice notice) throws Exception {
        log.info("프로모션 수정");
        log.info(notice.toString());
        int result = 0;
        // 아이디생성
        String id = notice.getId();
        fileDelete(id, "notice");
        try {
            notice.setType("promotion");
            // 썸네일 업로드
            String thumbPath = uploadPath + notice.getThumbFile().getName();
            notice.setThumbnail(thumbPath);
            Files thumbFiles = new Files();
            thumbFiles.setFile(notice.getContentFile());
            thumbFiles.setMain(false);
            thumbFiles.setParentId(id);
            thumbFiles.setParentTable("notice");
            upload(thumbFiles);

            // 컨텐츠파일 업로드
            Files contentFiles = new Files();
            contentFiles.setFile(notice.getContentFile());
            contentFiles.setMain(true);
            contentFiles.setParentId(id);
            contentFiles.setParentTable("notice");
            upload(contentFiles);

            result = noticeService.update(notice);
            if( result > 0 ){
                log.info("프로모션 수정 성공");
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else{
                log.info("프로모션 DB에 수정 중 에러 발생...");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            log.error("프로모션 수정 중 에러 발생...", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping()
    public ResponseEntity<?> destroy(Notice notice) {
        String id = notice.getId();
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

    public boolean upload(Files file) throws Exception {
        log.info("file : " + file);

        // 파일 정보
        MultipartFile mf = file.getFile();
        String origninName = mf.getOriginalFilename();
        long fileSize = mf.getSize();
        byte[] fileData = mf.getBytes();

        log.info("원본파일명 : " + origninName);
        log.info("파일용량 : " + fileSize);
        log.info("파일데이터 : " + fileData);

        // 파일 업로드
        // 파일 데이터를 업로드 경로에 복사
        // 업로드된 파일 정보를 DB 에 등록

        // 파일 복사
        // * 파일명 중복 방지 : 파일명 앞에 날짜데이터 또는 UID 를 붙여준다.
        String fileName = UUID.randomUUID().toString() + "_" + origninName;
        File uploadFile = new File(uploadPath, fileName);
        // 파일 경로 : C:/upload/UID_강아지.png
        // FileCopyUtils.copy(파일데이터, 파일객체);
        FileCopyUtils.copy(fileData, uploadFile);        // 파일 업로드
        
        // DB 등록
        file.setName(fileName);
        file.setOriginName(origninName);
        file.setPath(uploadFile.getPath());
        file.setSize(fileSize);
        fileService.insert(file);

        return true;
    }

    public boolean fileDelete(String id, String table) throws Exception{
        List<Files> fileList = fileService.list(id, table);
        for (Files files : fileList) {
            File file = new File(files.getPath());
            if (file.exists()) {
                file.delete();
            }
        }
        int result = fileService.allDelete(id, table);
        if (result > 0) {
            return true;
        }
        else
            return false;
    }
}
