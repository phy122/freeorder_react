import React from 'react'

const Notice = () => {
  return (
    <>
    <form className="notice" id="notice-insert" onsubmit="return false;">
            <h1>공지사항</h1>
            <div className="notice-title">
                <input type="hidden" name="type" value="notice" />
                <a href="#">제목</a>
                <input type="text" id="notice-title" name="title" th:value="${notice != null?notice.title:''}"
                    placeholder="제목을 입력하세요" />
            </div>
            <th:blcok th:if="${notice != null}">
                <div className="notice-radio">
                    <div className="radio-wrap">
                        <input type="checkbox" role="switch" name="enabled" id="enabled" th:checked="${notice.enabled}" />
                        <label for="enabled">활성화</label>
                    </div>
                </div>
            </th:blcok>
            <div className="notice-content">
                <a href="#">내용</a>
                <textarea name="content" id="notice-content" th:text="${notice != null?notice.content:''}"
                    placeholder="내용을 입력하세요"></textarea>
            </div>
            <button type="button" className="insert-btn" onclick="noticeInsert()">저장</button>
        </form>
    </>
  )
}

export default Notice