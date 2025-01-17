import React, { useState } from 'react';
import styles from './Option.module.css';

const OptionInsert = ({ optionInsert }) => {
    const [optionName, setOptionName] = useState('');

    const changeOptionName = (e) => {
        setOptionName(e.target.value);
    };

    const onSubmit = () => {
        if (!optionName) {
            alert('옵션 이름을 입력해주세요.');
            return;
        }
    
        const formData = new FormData();
        formData.append('name', optionName); // 'name' 키로 전달
    
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
    
        optionInsert(formData, headers);
    };

    return (
        <div className={styles['container']} layout:fragment="content">
            <div className={styles['i-container']}>
                <h2>옵션 그룹 추가</h2>
                <form onSubmit={(e) => e.preventDefault()} method="post" id="opt-insert">
                    <div className={styles['form-group']}>
                        <label htmlFor="name">옵션</label>
                        <input
                            type="text"
                            id="name"
                            onChange={changeOptionName}
                            placeholder="옵션 그룹명을 입력해주세요."
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <button type="button" className={styles['plus-box']}>
                            <i className={styles['material-symbols-outlined']}>add_circle</i>
                            <a href="#">옵션 추가</a>
                        </button>
                    </div>
                    <div className={styles['button-group']}>
                        <button type="button" className={styles['cancel-btn']} onClick={() => window.location.href = '/options'}>
                            취소
                        </button>
                        <button type="button" className={styles['insert-btn']} onClick={onSubmit}>
                            등록
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OptionInsert;
