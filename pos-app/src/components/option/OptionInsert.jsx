import React, { useState } from 'react'
import styles from './Option.module.css'

const OptionInsert = () => {

    const [optionName, setOptionName] = useState('')
  return (
    <div className={styles['container']} layout:fragment="content">
        <div className={styles['i-container']}>
            <h2>옵션 그룹 추가</h2>
            <form onsubmit="return false" method="post" id="opt-insert">
                <input type="hidden" name="id" th:value="${option.id}"/>
                <div className={styles['form-group']}>
                    <label for="name">옵션</label>
                    <input type="text" id="name" name="name" placeholder="옵션 그룹명을 입력해주세요." required/>
                </div>
                <div className={styles['form-group']}>
                    <button type="button" className={styles['plus-box']} onclick="addOptionItem()">
                        <i className={styles['material-symbols-outlined']}>add_circle</i>
                        <a href="#">옵션 추가</a>
                    </button>
                    <ul id="opt-item-list"></ul>
                </div>
                <div className={styles['button-group']}>
                    <button type="button" onclick="location.href='/pos/option'" className={styles['cancel-btn']}>취소</button>
                    <button type="button" className={styles['insert-btn']} onclick="optInsert()">등록</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default OptionInsert