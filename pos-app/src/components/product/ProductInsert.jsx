import React, { useState } from 'react';
import styles from './Product.module.css';

const ProductInsert = ({ proInsert, cateList }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    categoriesId: '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('categoriesId', formData.categoriesId);
    if (file) {
      data.append('productFile', file);
    }

    await proInsert(data);
  };

  return (
    <div className={styles['i-container']}>
      <form className={styles['insert-form']} encType="multipart/form-data">
        <h2>상품 정보</h2>

        <div className={styles['form-group']}>
          <label htmlFor="name">상품명</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="상품명을 입력하세요."
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="price">가격</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="가격을 입력하세요."
            required
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="description">상품 설명</label>
          <textarea
            name="description"
            id="description"
            placeholder="상품 설명을 입력하세요."
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="categoriesId">카테고리</label>
          <select
            name="categoriesId"
            id="categoriesId"
            required
            value={formData.categoriesId}
            onChange={handleChange}
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

        {/* 임시 옵션 UI */}
        <div className={styles['form-group']}>
          <label htmlFor="optionId">옵션</label>
          <div className={styles['plus-box']} onClick={() => alert('옵션 추가')}>
            <a>+선택</a>
          </div>
        </div>

        <div className={styles['button-group']}>
          <button
            type="button"
            onClick={() => (window.location.href = '/')}
            className={styles['cancel-btn']}
          >
            취소
          </button>
          <button type="button" onClick={handleSubmit} className={styles['submit-btn']}>
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductInsert;
