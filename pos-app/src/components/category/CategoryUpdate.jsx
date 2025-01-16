import React from 'react'
import styles from './Category.module.css'

const CategoryUpdate = () => {
  return (
    <div className={styles['container']} layout:fragment="content">
        <div className={styles['category-edit-page']}>
            <h1>카테고리 수정</h1>
            <form className={styles['category-form']} id="cate-update">
                <input type="hidden" name="id" th:value="${category.id}"/>
                <label for="category-name">카테고리 이름</label>
                <input type="text" id="name" name="name" th:value="${category.name}" required />

                {/* <!-- <label for="category-description">카테고리 설명</label>
                <textarea id="category-description" name="category-description" rows="4">현재 카테고리 설명</textarea> --> */}
                <div className={styles['ud-btn']}>
                    <button type="button" className={styles['update-btn']} onclick="cateUpdate()">수정</button>
                    <button type="button" className={styles['delete-btn']} onclick="cateDelete()">삭제</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CategoryUpdate