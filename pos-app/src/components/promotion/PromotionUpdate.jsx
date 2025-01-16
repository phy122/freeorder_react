import React from 'react';
import styles from './Promotion.module.css'

const PromotionUpdate = () => {
    const promotionUpdate = () => {
        console.log("프로모션 수정 버튼 클릭됨");
    };

    return (
        <div className={styles['container']} layout-fragment="content">
            <div className={styles['promotion-edit-page']}>
                <h1>프로모션 수정</h1>
                <form className={styles['promotion-form']} id="pro-update">
                    <input type="hidden" name="type" value="promotion" />
                    <input type="hidden" name="id" value="12345" />
                    
                    <label htmlFor="title">프로모션 이름</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        defaultValue="프로모션 제목" 
                        required 
                    />
                    
                    {/* 
                    <label htmlFor="promotion-description">프로모션 설명</label>
                    <textarea 
                        id="promotion-description" 
                        name="promotion-description" 
                        placeholder="프로모션 설명을 입력하세요" 
                        rows="4" 
                    />
                    */}

                    <label htmlFor="thumbFile">썸네일</label>
                    <input 
                        type="file" 
                        name="thumbFile" 
                        id="thumbFile" 
                    />

                    <label htmlFor="contentFile">프로모션 내용</label>
                    <input 
                        type="file" 
                        name="contentFile" 
                        id="contentFile" 
                    />

                    <button 
                        type="button" 
                        className={styles['promotion-update-btn']} 
                        onClick={promotionUpdate}
                    >
                        수정
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromotionUpdate;
