import React, { useState } from 'react';
import styles from './Category.module.css';

const CategoryUpdate = ({ category, cateUpdate, cateDelete }) => {
  const [cateName, setCateName] = useState(category.name);

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    setCateName(e.target.value);
  };

  // 수정 폼 제출 핸들러
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!cateName.trim()) {
      alert('카테고리 이름을 입력하세요.');
      return;
    }

    const updatedData = {
      ...category, // 기존 데이터 복사
      name: cateName.trim(),
    };

    cateUpdate(updatedData); // 수정 요청 함수 호출
  };

  return (
    <div className={styles['container']} layout:fragment="content">
      <div className={styles['category-edit-page']}>
        <h1>카테고리 수정</h1>
        <form
          className={styles['category-form']}
          id="cate-update"
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="id" value={category.id} />
          <label htmlFor="category-name">카테고리 이름</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="카테고리 이름을 입력하세요"
            value={cateName}
            onChange={handleInputChange}
            required
          />
          <div className={styles['ud-btn']}>
            <button type="submit" className={styles['update-btn']}>
              수정
            </button>
            <button
              type="button"
              className={styles['delete-btn']}
              onClick={() => {
                if (window.confirm('정말 삭제하시겠습니까?')) {
                  cateDelete();
                }
              }}
            >
              삭제
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryUpdate;
