import React from 'react'
import './Product.css'

const ProductList = () => {
  return (
    <div className="container" layout:fragment="content">
        <div className="main-container">
            <div className="left-side">
                <div className="category-list">
                    <div className="cate-wrap">
                        <div className="tab-menu-container">
                            <ul className="tab-menu" id="cate-tab-menu">
                                <li><a href="/pos/product" className="tab-menu-item">
                                        <span th:classappend="${cateId == null ? 'active': ''}">전체</span>
                                    </a></li>
                                <th:block th:if="${cateList != null}" th:each="cate : ${cateList}">
                                    <li><a th:href="|/pos/product/products?cate=${cate.id}|" className="tab-menu-item">
                                            <span th:classappend="${cate.id == cateId ? 'active': ''}"
                                                th:text="${cate.name}" th:data-id="${cate.id}"></span>
                                        </a></li>
                                </th:block>
                            </ul>
                        </div>
                        <div className="cate-btn">
                            <button type="button" className="btn-left" id="cate-left-btn">◀</button>
                            <button type="button" className="btn-right" id="cate-right-btn">▶</button>
                        </div>
                    </div>
                    <th:block th:if="${ cateList.isEmpty()}">
                        카테고리가 없습니다.
                    </th:block>
                </div>

                <div className="product-page">
                    <div className="product-header">
                        <h1>상품 목록</h1>
                        <a className="add-product-btn" href="/pos/product/insert">+ 상품 추가</a>
                    </div>
                    <div className="product-list">
                        <th:block th:if="${productList != null}" th:each="product : ${productList}">
                            <div className="product-item"
                                th:onclick="openOptionModal([[${product.id}]], [[${product.optionsId}]] ); ">
                                <div className="product-image-placeholder">
                                    <img th:src="@{/pimg(id=${product.id})}" alt="" width="100%" height="100%" />
                                </div>
                                <span className="product-name" th:text="${product.name}"></span>
                                <span className="product-price" th:text="${#numbers.formatInteger(product.price, 3, 'COMMA') + '원'}"></span>
                            </div>

                        </th:block>
                        <th:block th:if="${productList.isEmpty()}">
                            상품이 없습니다.
                        </th:block>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="right-header">
                    <a href="#" className="settings-btn">⚙️</a>
                    <button className="delete-all-btn" onclick="clearCart()">전체 삭제</button>
                </div>
                <div id="selected-products" className="selected-products">
                    <ul className="cart-list" id="cart-list">

                    </ul>
                </div>
                <div className="payment-buttons">
                    <button className="card-pay" onclick="sendPayment('카드')">
                        <span className="material-symbols-outlined">credit_card</span>
                        <p>카드 결제</p>
                    </button>
                    <button className="cash-pay" onclick="sendPayment('현금')">
                        <span className="material-symbols-outlined">paid</span>
                        <p>현금 결제</p>
                    </button>
                </div>
                <div id="total-price">총 가격: <span id="cart-total-price"></span>원</div>
            </div>
        </div>
        <div className="so-modal-overlay" id="option-modal">
            <div className="so-modal" id="option-modal-body">
                <div className="so-container">
                    <div className="so-option-title">
                        <h5>옵션 선택</h5>
                        <a href="javascript:void(0)" id="option-modal-close" onclick="closeModalMapping()">
                            <span className="material-symbols-outlined">close</span>
                        </a>
                    </div>
                    <input type="hidden" id="option-modal-product-id" />
                    <input type="hidden" id="option-modal-options-id" />
                    <ul id="modal-option-list"></ul>
                    <div className="option-btns">
                        <button type="button" className="select-btn" onclick="addCartWithOption()">추가</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal" className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <div className="modal-header">
                        <h5>상품 설정</h5>
                        <span className="close-btn">&times;</span>
                    </div>
                </div>
                
                <div className="modal-section">
                    <h3 className="section-title">상품</h3>
                    <div className="card-container">
                        <a href="/pos/product/insert" className="card">
                            <img src="/img/상품 정보 수정.png" alt="상품 등록" />
                            <h4>상품 등록</h4>
                        </a>
                        <a href="/pos/product/update_list" className="card">
                            <img src="/img/상품 정보 수정.png" alt="상품 정보 수정" />
                            <h4>상품 정보 수정</h4>
                        </a>
                        <a href="/pos/product/locate" className="card">
                            <img src="/img/상품 배치 수정.png" alt="상품 배치 수정" />
                            <h4>상품 배치 수정</h4>
                        </a>
                    </div>
                </div>

                <div className="modal-section">
                    <h3 className="section-title">카테고리</h3>
                    <div className="card-container">
                        <a href="/pos/category" className="card">
                            <img src="/img/카테고리 정보수정.png" alt="카테고리 정보 수정" />
                            <h4>카테고리 정보 수정</h4>
                        </a>
                        <a href="/pos/category/seq_list" className="card">
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