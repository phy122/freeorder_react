import React from 'react'
import styles from './Category.module.css'

const CategoryList = ({cateList}) => {
  return (
    <div className={styles['container']} layout:fragment="content">
      <div className={styles['category-page']}>
        <div className={styles['category-header']}>
          <h1>카테고리</h1>
          <a className={styles['add-category-btn']} href="/categories/insert">+ 추가</a>
        </div>
        <div className={styles['category-list']}>
          {
            cateList != null
            ?
            cateList.map((cate) => (
              <div className={styles['category-item']} draggable="true" key={cate.id}>
                <span className={styles['category-name']}>{cate.name}</span>
                <a className={styles['edit-btn']} href="/pos/categories/update/${cate.id}">수정</a>
              </div>
            ))
            :
            `카테고리가 없습니다.`
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryList