import React from 'react'
import styles from './Product.module.css'

const ProductList = ({ cateList, proList, onCategoryChange  }) => {


  return (
    <div className={styles['container']} layout:fragment="content">
      <div className={styles['main-container']}>
        <div className={styles['left-side']}>
          <div className={styles['category-list']}>
            <div className={styles['cate-wrap']}>
              <div className={styles['tab-menu-container']}>
                <ul className={styles['tab-menu']} id="cate-tab-menu">
                  <li><a href="/" className={styles['tab-menu-item']}>
                    <span>전체</span>
                  </a></li>
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
                <button type="button" className={styles['btn-left']} id="cate-left-btn">◀</button>
                <button type="button" className={styles['btn-right']} id="cate-right-btn">▶</button>
              </div>
            </div>
          </div>

          <div className={styles['product-page']}>
            <div className={styles['product-header']}>
              <h1>상품 목록</h1>
              <a className={styles['add-product-btn']} href="/products/insert">+ 상품 추가</a>
            </div>
            <div className={styles['product-list']}>
              {
                proList && proList.length > 0 ? (
                  proList.map((product) => (
                    <div className={styles['product-item']} key={product.id}>
                      <div className={styles['product-image-placeholder']}>
                        <img src={`/api/pimg?id=${product.id}`} alt="" width="100%" height="100%" />
                      </div>
                      <span className={styles['product-name']}>{product.name}</span>
                      <span className={styles['product-price']}>{product.price}원</span>
                    </div>
                  ))
                ) : (
                  `상품이 없습니다.`
                )
              }

            </div>
          </div>
        </div>

        <div className={styles['right-side']}>
          <div className={styles['right-header']}>
            <a href="#" className={styles['settings-btn']}>⚙️</a>
            <button className={styles['delete-all-btn']} onclick="clearCart()">전체 삭제</button>
          </div>
          <div id="selected-products" className={styles['selected-products']}>
            <ul className={styles['cart-list']} id="cart-list">

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
          <div id="total-price">총 가격: <span id="cart-total-price"></span>원</div>
        </div>
      </div>
      <div className={styles['so-modal-overlay']} id="option-modal">
        <div className={styles['so-modal']} id="option-modal-body">
          <div className={styles['so-container']}>
            <div className={styles['so-option-title']}>
              <h5>옵션 선택</h5>
              <a href="javascript:void(0)" id="option-modal-close" onclick="closeModalMapping()">
                <span className={styles['material-symbols-outlined']}>close</span>
              </a>
            </div>
            <input type="hidden" id="option-modal-product-id" />
            <input type="hidden" id="option-modal-options-id" />
            <ul id="modal-option-list"></ul>
            <div className={styles['option-btns']}>
              <button type="button" className={styles['select-btn']} onclick="addCartWithOption()">추가</button>
            </div>
          </div>
        </div>
      </div>
      <div id="modal" className={styles['modal']}>
        <div className={styles['modal-container']}>
          <div className={styles['modal-header']}>
            <div className={styles['modal-header']}>
              <h5>상품 설정</h5>
              <span className={styles['close-btn']}>&times;</span>
            </div>
          </div>

          <div className={styles['modal-section']}>
            <h3 className={styles['section-title']}>상품</h3>
            <div className={styles['card-container']}>
              <a href="/pos/product/insert" className={styles['card']}>
                <img src="/img/상품 정보 수정.png" alt="상품 등록" />
                <h4>상품 등록</h4>
              </a>
              <a href="/pos/product/update_list" className={styles['card']}>
                <img src="/img/상품 정보 수정.png" alt="상품 정보 수정" />
                <h4>상품 정보 수정</h4>
              </a>
              <a href="/pos/product/locate" className={styles['card']}>
                <img src="/img/상품 배치 수정.png" alt="상품 배치 수정" />
                <h4>상품 배치 수정</h4>
              </a>
            </div>
          </div>

          <div className={styles['modal-section']}>
            <h3 className={styles['section-title']}>카테고리</h3>
            <div className={styles['card-container']}>
              <a href="/pos/category" className={styles['card']}>
                <img src="/img/카테고리 정보수정.png" alt="카테고리 정보 수정" />
                <h4>카테고리 정보 수정</h4>
              </a>
              <a href="/pos/category/seq_list" className={styles['card']}>
                <img src="/img/카테고리 순서변경.png" alt="카테고리 순서 변경" />
                <h4>카테고리 순서 변경</h4>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProductList