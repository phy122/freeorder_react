import React from 'react';
import styles from './Promotion.module.css'

const PromotionInsert = () => {
    const promotionInsert = () => {
        console.log("프로모션 등록 버튼 클릭");
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
                    <input type="hidden" name="type" value="promotion" />
                    
                    <label htmlFor="promotion-name">프로모션 이름</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="프로모션 이름을 입력하세요" 
                        required 
                    />
                    
                    <label htmlFor="thumbFile">썸네일</label>
                    <input 
                        type="file" 
                        name="thumbFile" 
                        id="thumbFile" 
                        required 
                    />
                    
                    <label htmlFor="contentFile">프로모션 내용</label>
                    <input 
                        type="file" 
                        name="contentFile" 
                        id="contentFile" 
                        required 
                    />
                    
                    <button 
                        type="button" 
                        className={styles['promotion-insert-btn']} 
                        onClick={promotionInsert} // 버튼 클릭 이벤트
                    >
                        등록
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromotionInsert;
