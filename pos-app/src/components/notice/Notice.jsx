import React from 'react'
import styles from './Notice.module.css'

const Notice = () => {
  return (
    <>
    <form className={styles['notice']} id="notice-insert" onsubmit="return false;">
            <h1>공지사항</h1>
            <div className={styles['notice-title']}>
                <input type="hidden" name="type" value="notice" />
                <a href="#">제목</a>
                <input type="text" id="notice-title" name="title" th:value="${notice != null?notice.title:''}"
                    placeholder="제목을 입력하세요" />
            </div>
            <th:blcok th:if="${notice != null}">
                <div className={styles['notice-radio']}>
                    <div className={styles['radio-wrap']}>
                        <input type="checkbox" role="switch" name="enabled" id="enabled" th:checked="${notice.enabled}" />
                        <label for="enabled">활성화</label>
                    </div>
                </div>
            </th:blcok>
            <div className={styles['notice-content']}>
                <a href="#">내용</a>
                <textarea name="content" id="notice-content" th:text="${notice != null?notice.content:''}"
                    placeholder="내용을 입력하세요"></textarea>
            </div>
            <button type="button" className={styles['insert-btn']} onclick="noticeInsert()">저장</button>
        </form>
    </>
  )
}

export default Notice