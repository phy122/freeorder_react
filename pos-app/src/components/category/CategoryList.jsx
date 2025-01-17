import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Category.module.css';

const CategoryList = ({ cateList }) => {
  return (
    <div className={styles['container']} layout:fragment="content">
      <div className={styles['category-page']}>
        <div className={styles['category-header']}>
          <h1>카테고리</h1>
          <Link className={styles['add-category-btn']} to="/categories/insert">
            + 추가
          </Link>
        </div>
        <div className={styles['category-list']}>
          {cateList != null ? (
            cateList.map((cate) => (
              <div
                className={styles['category-item']}
                draggable="true"
                key={cate.id}
              >
                <span className={styles['category-name']}>{cate.name}</span>
                <Link
                  className={styles['edit-btn']}
                  to={`/categories/update/${cate.id}`}
                >
                  수정
                </Link>
              </div>
            ))
          ) : (
            `카테고리가 없습니다.`
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
