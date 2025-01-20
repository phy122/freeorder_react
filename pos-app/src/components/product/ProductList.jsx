import React, { useState, useEffect } from 'react';
import styles from './Product.module.css';
import * as options from '../../apis/option';  // options API 호출
import api from '../../apis/api';  // 기존 API 호출

const ProductList = ({ cateList, proList, onCategoryChange }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [optModalOpen, setOptModalOpen] = useState(false); // 옵션 선택 모달 열기
  const [selectedProduct, setSelectedProduct] = useState(null); // 선택된 상품
  const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션
  const [optList, setOptList] = useState([]);  // 옵션 목록

  // 옵션 목록 불러오기
  const optionLoad = async () => {
    try {
      const response = await options.list();  // 옵션 API 호출
      const data = response.data;
      const status = response.status;
      if (status === 200) {
        setOptList(data);  // 옵션 리스트 상태 업데이트
      }
    } catch (error) {
      console.error('옵션 불러오기 오류:', error);
    }
  };

  // 옵션 목록을 한 번만 불러오기
  useEffect(() => {
    optionLoad();
  }, []);

  // 모달 열기 함수
  const openModal = () => {
    setModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  // 아이템 옵션 열기 함수
  const openOptSelect = (product) => {
    setSelectedProduct(product);  // 선택된 상품 설정
    setSelectedOption(null);  // 기존 선택된 옵션 초기화
    setOptModalOpen(true);  // 옵션 모달 열기
  };

  // 아이템 옵션 닫기 함수
  const closeOptSelect = () => {
    setOptModalOpen(false);  // 옵션 모달 닫기
  };

  // 옵션 선택 처리 함수
  const handleOptionSelect = (option) => {
    setSelectedOption(option);  // 선택된 옵션 설정
  };

  return (
    <div className={styles.container}>
      <div className={styles['main-container']}>
        {/* 왼쪽 사이드 - 카테고리 */}
        <div className={styles['left-side']}>
          <div className={styles['category-list']}>
            <div className={styles['cate-wrap']}>
              <div className={styles['tab-menu-container']}>
                <ul className={styles['tab-menu']} id="cate-tab-menu">
                  <li>
                    <a href="/" className={styles['tab-menu-item']}>
                      <span>전체</span>
                    </a>
                  </li>
                  {cateList.map((cate) => (
                    <li key={cate.id}>
                      <a
                        className={styles['tab-menu-item']}
                        onClick={() => onCategoryChange(cate.id)}
                      >
                        <span>{cate.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles['cate-btn']}>
                <button
                  type="button"
                  className={styles['btn-left']}
                  id="cate-left-btn"
                >
                  ◀
                </button>
                <button
                  type="button"
                  className={styles['btn-right']}
                  id="cate-right-btn"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>

          {/* 상품 목록 */}
          <div className={styles['product-page']}>
            <div className={styles['product-header']}>
              <h1>상품 목록</h1>
              <a className={styles['add-product-btn']} href="/products/insert">
                + 상품 추가
              </a>
            </div>
            <div className={styles['product-list']}>
              {proList && proList.length > 0 ? (
                proList.map((product) => (
                  <div
                    className={styles['product-item']}
                    key={product.id}
                    onClick={() => openOptSelect(product)} // 상품 클릭 시 옵션 모달 열기
                  >
                    <div className={styles['product-image-placeholder']}>
                      <img
                        src={`/api/pimg?id=${product.id}`}
                        alt={product.name}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <span className={styles['product-name']}>{product.name}</span>
                    <span className={styles['product-price']}>
                      {product.price}원
                    </span>
                  </div>
                ))
              ) : (
                `상품이 없습니다.`
              )}
            </div>
          </div>
        </div>

        {/* 오른쪽 사이드 - 결제 관련 */}
        <div className={styles['right-side']}>
          <div className={styles['right-header']}>
            <button className={styles['settings-btn']} onClick={openModal}>
              ⚙️
            </button>
            <button
              className={styles['delete-all-btn']}
              onClick={() => console.log('Cart cleared')}
            >
              전체 삭제
            </button>
          </div>
          <div id="selected-products" className={styles['selected-products']}>
            <ul className={styles['cart-list']} id="cart-list">
              {selectedOption && (
                <li>
                  <span>{selectedOption.name}</span> -{' '}
                  <span>{selectedOption.price}원</span>
                </li>
              )}
            </ul>
          </div>
          <div className={styles['payment-buttons']}>
            <button className={styles['card-pay']} onclick="sendPayment('카드')">
              <span className={styles['material-symbols-outlined']}>credit_card</span>
              <p>카드 결제</p>
            </button>
            <button className={styles['cash-pay']} onclick="sendPayment('현금')">
              <span className={styles['material-symbols-outlined']}>paid</span>
              <p>현금 결제</p>
            </button>
          </div>
          <div id="total-price">
            총 가격: <span id="cart-total-price"></span>원
          </div>
        </div>
      </div>

      {/* 세팅 모달 */}
      {ModalOpen && (
        <div className={ModalOpen ? `${styles.show} ${styles['modal']}` : ``}>
          <div
            className={styles['modal-container']}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles['modal-header']}>
              <h5>상품 설정</h5>
              <span className={styles['close-btn']} onClick={closeModal}>
                &times;
              </span>
            </div>

            <div className={styles['modal-section']}>
              <h3 className={styles['section-title']}>상품</h3>
              <div className={styles['card-container']}>
                <a href="/products/insert" className={styles['card']}>
                  <img src="/img/상품 정보 수정.png" alt="상품 등록" />
                  <h4>상품 등록</h4>
                </a>
                <a href="/products/updateList" className={styles['card']}>
                  <img src="/img/상품 정보 수정.png" alt="상품 정보 수정" />
                  <h4>상품 정보 수정</h4>
                </a>
                <a href="/products/locate" className={styles['card']}>
                  <img src="/img/상품 배치 수정.png" alt="상품 배치 수정" />
                  <h4>상품 배치 수정</h4>
                </a>
              </div>
            </div>

            <div className={styles['modal-section']}>
              <h3 className={styles['section-title']}>카테고리</h3>
              <div className={styles['card-container']}>
                <a href="/categories" className={styles['card']}>
                  <img src="/img/카테고리 정보수정.png" alt="카테고리 정보 수정" />
                  <h4>카테고리 정보 수정</h4>
                </a>
                <a href="/categories/seqList" className={styles['card']}>
                  <img src="/img/카테고리 순서변경.png" alt="카테고리 순서 변경" />
                  <h4>카테고리 순서 변경</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 옵션 선택 모달 */}
      {optModalOpen && selectedProduct && (
        <div
          className={optModalOpen ? `${styles.show} ${styles['modal']}` : ``}
        >
          <div
            className={styles['modal-container']}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles['so-container']}>
              <div className={styles['so-option-title']}>
                <h3>옵션 선택</h3>
                <span
                  className={styles['material-symbols-outlined']}
                  onClick={closeOptSelect}
                >
                  close
                </span>
              </div>

              <div className={styles['so-option-select']}>
                {optList.length > 0 ? (
                  optList.map((opt) => (
                    <div
                      key={opt.id}
                      className={`${styles['so-option-card']} ${
                        selectedOption?.id === opt.id ? styles.active : ''
                      }`}
                      onClick={() => handleOptionSelect(opt)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedOption?.id === opt.id}
                        readOnly
                      />
                      <span>{opt.name}</span>
                      <div className={styles['read-option-price']}>
                        {opt.price}원
                      </div>
                    </div>
                  ))
                ) : (
                  <p>옵션이 없습니다.</p>
                )}
              </div>

              <div className={styles['option-btns']}>
                <button
                  className={styles['select-btn']}
                  onClick={() => handleOptionSelect(selectedOption)}
                >
                  옵션 선택 완료
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
