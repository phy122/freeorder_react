import React from 'react';
import { Link } from 'react-router-dom';  // Link 컴포넌트 사용
import styles from './Product.module.css';

const ProductUpdateList = ({ proUpdateList }) => {
  return (
    <div className={styles['ul-container']} layout:fragment="content">
      <div className={styles['ul-container-son']}>
        
        <div className={styles['ul-cancel-container']}>
          <a href="/">
            <button type="button" className={styles['ul-cancel-btn']}>취소</button>
          </a>
        </div>

        <div className={styles['ul-list-title']}>
          <h3>수정할 상품을 선택해 주세요.</h3>
        </div>

        <div className={styles['ul-product-list']}>
          {
            proUpdateList && proUpdateList.length > 0
              ? proUpdateList.map((product) => (
                <Link
                  key={product.id}
                  className={styles['ul-product-card']}
                  to={`/products/update/${product.id}`}  // Link 컴포넌트로 수정
                >
                  <div className={styles['product-image-placeholder']}>
                    <img
                      src={`/api/pimg?id=${product.id}`}  // 상품 이미지 URL
                      alt={product.name}
                    />
                  </div>
                  <span className={styles['product-name']}>{product.name}</span>
                  <span className={styles['product-price']}>{product.price}원</span>
                </Link>
              ))
              : <p>상품이 없습니다.</p>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductUpdateList;
