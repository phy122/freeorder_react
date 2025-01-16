import React from 'react'
import styles from './Category.module.css'

const CategoryInsert = () => {
  return (
    <div className={styles['container']} layout:fragment="content">
        <div className={styles['category-register-page']}>
            <h1>카테고리 등록</h1>
            <form className={styles['category-form']} id="cate-insert">
                <label for="category-name">카테고리 이름</label>
                <input type="text" id="name" name="name" placeholder="카테고리 이름을 입력하세요" required />
                {/* <!-- <label for="category-description">카테고리 설명</label> --> */}
                {/* <!-- <textarea id="description" name="description" placeholder="카테고리 설명을 입력하세요" rows="4"></textarea> --> */}
                <button type="button" className={styles['submit-btn']} onclick="cateInsert()">등록</button>
            </form>
        </div>
    </div>
  )
}

export default CategoryInsert