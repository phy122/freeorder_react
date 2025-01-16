import React from 'react'
import styles from './Product.module.css'

const ProductUpdateList = () => {
  return (
    <div className={styles['ul-container']} layout:fragment="content">
        <div className={styles['ul-container-son']}>
            <div className={styles['ul-cancel-container']}>
                <a href="/pos/product">
                    <button type="button" className={styles['ul-cancel-btn']}>취소</button>
                </a>
            </div>

            <div className={styles['ul-list-title']}>
                <h3>수정할 상품을 선택해 주세요.</h3>
            </div>


            <div className={styles['ul-product-list']}>
                <th:block th:if="${productList != null}" th:each="product : ${productList}">
                    <a className={styles['ul-product-card']} th:href="|/pos/product/update/${product.id}|">
                        <div className={styles['product-image-placeholder']}>
                            <img th:src="|/pimg?id=${product.id}|" alt="" width="100%" height="100%"/>
                        </div>
                        <span className={styles['product-name']} th:text="${product.name}"></span>
                        <span className={styles['product-price']} th:text="${product.price} + '원'"></span>
                    </a>
                </th:block>
                <th:block th:if="${productList.isEmpty()}">
                    상품이 없습니다.
                </th:block>
            </div>
        </div>
    </div>
  )
}

export default ProductUpdateList