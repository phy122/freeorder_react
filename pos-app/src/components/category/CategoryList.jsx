import React from 'react'
import styles from './Category.module.css'

const CategoryList = () => {
  return (
    <div className={styles['container']} layout:fragment="content">
        <div className={styles['category-page']}>
            <div className={styles['category-header']}>
                <h1>카테고리</h1>
                <a className={styles['add-category-btn']} href="/category/insert">+ 추가</a>
            </div>
            <div className={styles['category-list']}>
                <th:block th:if="${ cateList != null }" th:each="cate : ${cateList}">
                    <div className={styles['category-item']} draggable="true">
                        <span className={styles['category-name']} th:text="${cate.name}"></span>
                        <a className={styles['edit-btn']} th:href="|/pos/category/update/${cate.id}|">수정</a>
                    </div>
                </th:block>
                <th:block th:if="${ cateList.isEmpty()}">
                    카테고리가 없습니다.
                </th:block>
            </div>
        </div>
    </div>
  )
}

export default CategoryList