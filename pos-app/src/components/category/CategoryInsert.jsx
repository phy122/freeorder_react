import React, { useState } from 'react'
import styles from './Category.module.css'

const CategoryInsert = ({ cateInsert }) => {

  const [cateName, setCateName] = useState('')

  // 입력값 변경 핸들러
  const cateHandler = (e) => {
    setCateName(e.target.value)
  }

  
  // 폼 제출 핸들러
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (!cateName.trim()) {
      alert('카테고리 이름을 입력하세요.');
      return;
    }
  
    const formData = {
      id: new Date().getTime().toString(), // 예시로 고유 ID 생성
      name: cateName.trim(),
      seq: 0, // 기본 seq 값 설정
    };
  
    try {
      const headers = { 'Content-Type': 'application/json' };
      await cateInsert(formData, headers);
      // alert('카테고리 등록 완료');
      setCateName('');
    } catch (error) {
      console.error(error);
      alert('등록 중 오류가 발생했습니다.');
    }
  };
  

  return (
    <div className={styles['container']} layout:fragment="content">
        <div className={styles['category-register-page']}>
            <h1>카테고리 등록</h1>
            <form className={styles['category-form']} id="cate-insert" onSubmit={handleFormSubmit}>
                <label htmlFor="category-name">카테고리 이름</label>
                <input type="text" id="name" name="name" placeholder="카테고리 이름을 입력하세요" value={cateName} onChange={cateHandler} required />
                <button type="submit" className={styles['submit-btn']}>등록</button>
            </form>
        </div>
    </div>
  )
}

export default CategoryInsert