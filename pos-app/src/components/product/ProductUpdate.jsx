import React from 'react';
import styles from './Product.module.css';

const ProductUpdate = ({ product, cateList, setProduct, handleDelete }) => {
  // 파일 선택 시 상태 업데이트
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProduct({ ...product, productFile: file })
    }
  }

  // 폼 제출 시 실행되는 함수
  const onSubmit = (e) => {
    e.preventDefault();  // 폼 제출 기본 동작 방지
    // 수정 처리 로직은 다른 함수로 처리됨
  }

  return (
    <div className={styles['i-container']} layout:fragment="content">
      <h2>상품 수정</h2>
      <form className={styles['form-group']} id="pro-update" onSubmit={onSubmit}>
        <input type="hidden" name="id" value={product.id || ''} />

        <div className={styles['form-group']}>
          <label htmlFor="name">상품명</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name || ''}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="상품명을 입력하세요."
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="price">가격</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price || ''}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder="가격을 입력하세요."
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="description">상품 설명</label>
          <textarea
            name="description"
            id="description"
            value={product.description || ''}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            placeholder="상품 설명을 입력하세요."
          ></textarea>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="categoriesId">카테고리</label>
          <select
            name="categoriesId"
            id="categoriesId"
            value={product.categoriesId || ''}
            onChange={(e) => setProduct({ ...product, categoriesId: e.target.value })}
            required
          >
            <option value="">카테고리 선택</option>
            {cateList.map((cate) => (
              <option key={cate.id} value={cate.id}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="productFile">상품 이미지</label>
          <input
            type="file"
            name="productFile"
            id="productFile"
            onChange={handleFileChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="optionId">옵션</label>
          <div className={styles['plus-box']}>
            <a>+선택</a>
          </div>
          <ul id="optionList"></ul>
          <input type="hidden" name="optionsId" value={product.optionsId || ''} />
        </div>

        <div className={styles['button-group']}>
          <button type="button" className={styles['cancel-btn']} onClick={handleDelete}>
            삭제
          </button>
          <button type="submit" className={styles['submit-btn']}>
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
