import React from 'react'
import styles from './Product.module.css'

const ProductSetting = () => {
  return (
    <div className={styles['s-container']} layout:fragment="content">
        <div className={styles['s-setting-container']}></div>
        <div className={styles['s-setting-title']}>
            <h5>상품 설정</h5>
            <a href="">
                <span className={styles['material-symbols-outlined']}>
                    close
                </span>
            </a>
        </div>
        <div className={styles['s-product-all']}>
            <div className={styles['s-sub-title']}>
                <h3>상품</h3>
            </div>
            <div className={styles['s-product-setting']}>
                <a href="" className={styles['s-product-card']}>
                    <div>
                        <img src="/img/상품 정보 수정.png" alt=""/>
                        <h4>상품 등록</h4>
                    </div>
                </a>
                <a href="" className={styles['s-product-card']}>
                    <div>
                        <img src="/img/상품 정보 수정.png" alt=""/>
                        <h4>상품 정보 수정</h4>
                    </div>
                </a>
                <a href="" className={styles['s-product-card']}>
                    <div>
                        <img src="/img/상품 배치 수정.png" alt=""/>
                        <h4>상품 배치 수정</h4>
                    </div>
                </a>
                <a href="" className={styles['s-product-card']}>
                    <div>
                        <img src="/img/상품 카드 보기 방식.png" alt=""/>
                        <h4>상품 카드 보기 방식</h4>
                    </div>
                </a>
            </div>
        </div>
        <div className={styles['s-category-all']}>
            <div className={styles['s-sub-title']}>
                <h3>카테고리</h3>
            </div>
            <div className={styles['s-category-setting']}>
                <a href="">
                    <div className={styles['s-category-card']}>
                        <img src="/img/카테고리 정보 수정.png" alt=""/>
                        <h4>카테고리 정보 수정</h4>
                    </div>
                </a>
                <a href="">
                    <div className={styles['s-category-card']}>
                        <img src="/img/카테고리 순서 변경.png" alt=""/>
                        <h4>카테고리 순서 변경</h4>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProductSetting