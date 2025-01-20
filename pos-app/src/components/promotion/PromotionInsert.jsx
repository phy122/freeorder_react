import React, { useState } from 'react';
import styles from './Promotion.module.css';

const PromotionInsert = ({ proInsert }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('promotion');
    const [thumbFile, setThumbFile] = useState(null);
    const [contentFile, setContentFile] = useState(null);

    const changeTitle = (e) => setTitle(e.target.value);
    const changeType = (e) => setType(e.target.value);

    // 파일 변경 이벤트
    const changeThumbFile = (e) => {
        console.log("선택된 썸네일 파일:", e.target.files[0]);
        setThumbFile(e.target.files[0]);
    };

    const changeContentFile = (e) => {
        console.log("선택된 내용 파일:", e.target.files[0]);
        setContentFile(e.target.files[0]);
    };

    const promotionInsert = () => {
        const formData = new FormData();

        // 프로모션 정보 추가
        formData.append('title', title);
        formData.append('type', type);

        // 파일 데이터 추가
        if (thumbFile) {
            formData.append('thumbFile', thumbFile);
        }
        if (contentFile) {
            formData.append('contentFile', contentFile);
        }

        // 디버깅: 폼 데이터 출력
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // `proInsert` 함수 호출
        if (typeof proInsert === 'function') {
            proInsert(formData);
        } else {
            console.error("proInsert 함수가 전달되지 않았습니다.");
        }
    };

    return (
        <div className={styles['container']}>
            <div className={styles['promotion-insert-page']}>
                <h1>프로모션 등록</h1>
                <form
                    className={styles['promotion-form']}
                    id="promotion-insert"
                    onSubmit={(e) => e.preventDefault()} // 폼 제출 방지
                >
                    <input
                        type="hidden"
                        name="type"
                        value={type}
                        onChange={changeType}
                    />

                    <label htmlFor="promotion-name">프로모션 이름</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={changeTitle}
                        className={styles['form-input']}
                        placeholder="프로모션 이름을 입력하세요"
                        required
                    />

                    <label htmlFor="thumbFile">썸네일</label>
                    <input
                        type="file"
                        name="thumbFile"
                        onChange={changeThumbFile}
                        className={styles['form-input']}
                        required
                    />

                    <label htmlFor="contentFile">프로모션 내용</label>
                    <input
                        type="file"
                        name="contentFile"
                        onChange={changeContentFile}
                        className={styles['form-input']}
                        required
                    />

                    <button
                        type="button"
                        className={styles['promotion-insert-btn']}
                        onClick={promotionInsert}
                    >
                        등록
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromotionInsert;
