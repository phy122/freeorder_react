import React from 'react'
import styles from './Product.module.css'

const ProductSelectOption = () => {
  return (
    <div className={styles['so-container']} layout:fragment="content">
        <div className={styles['so-option-title']}>
            <h5>옵션 선택</h5>
            <a href="">
                <span className={styles['material-symbols-outlined']}>
                    close
                </span>
            </a>
        </div>
        <th:block th:if="${option != null}">
                <input type="hidden" id="optionId" th:value="${option.id}"/>
                <div className={styles['title mt-5 mb-5 ml-4 fs-normal']}>옵션 선택</div>
                <div className={styles['checkbox-container ml-5 mb-5']}>
                    <th:block th:if="${itemList != null and not itemList.isEmpty()}" th:each="item, iterStat : ${itemList}">
                        <div>
                            <label className={styles['option-checkbox flex align-items-center mr-5 ml-5']} th:for="${item.id}">
                                <input type="checkbox" th:id="${item.id}" name="itemList" th:value="${item.id}"/>
                                <span th:text="${item.name}"></span>
                                <div className={styles['read-option-price mr-5']}>
                                    <span th:text="${#numbers.formatInteger(item.price, 3, 'COMMA') + '원'}"></span>
                                </div>
                            </label>
                        </div>
                    </th:block>
                </div>
            </th:block>
         <div className={styles['option-btns']}>
            <button type="button" className={styles['select-btn']}>선택</button>
         </div>
    </div>
  )
}

export default ProductSelectOption