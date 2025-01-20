import React, { useState } from 'react';
import styles from './Product.module.css';

const ProductInsert = ({ proInsert, cateList, optList }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    categoriesId: '',
  });

  const [file, setFile] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isOptionListVisible, setIsOptionListVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOptionSelect = (option) => {
    setSelectedOptions(option);
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

    data.append('optionsId', selectedOptions.id);
    await proInsert(data);
  };

  const toggleOptionListVisibility = () => {
    setIsOptionListVisible(!isOptionListVisible); // 옵션 리스트 토글
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

        {/* 옵션 추가 UI */}
        <div className={styles['form-group']}>
          <label htmlFor="optionId">옵션</label>
          <div
            className={styles['plus-box']}
            onClick={toggleOptionListVisibility} // 버튼 클릭 시 옵션 리스트 토글
          >
            <a>{isOptionListVisible ? '닫기' : '+선택'}</a>
          </div>
        </div>

        {/* 옵션 리스트 표시 여부 제어 */}
        {isOptionListVisible && (
          <div className={styles['form-group']}>
            <div id="optionList">
              {optList.map((opt) => (
                <div
                  key={opt.id}
                  className={`${styles['opt-list']} ${selectedOptions.id === opt.id ? styles.active : ''}`}
                  onClick={() => handleOptionSelect(opt)}
                >
                  <div className={styles['opt-title']}>{opt.name}</div>

                  {/* 옵션 아이템 */}
                  <div className={styles['text-icon']}>
                    {opt.itemList && opt.itemList.length > 0 ? (
                      opt.itemList.map((item) => (
                        <div key={item.id} className={styles['opt-item']}>
                          <span>{item.name}</span>
                        </div>
                      ))
                    ) : (
                      <span>옵션 아이템 없음</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
