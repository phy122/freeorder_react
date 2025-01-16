import React from 'react'
import { Link } from 'react-router-dom'
import './css/styles.css'

const ProductList = () => {
  return (
    <div className="container">
        {/* <!-- 상단 / 뒤로가기 --> */}
        <div className="header">
            <div className="back">
                <Link to="/">
                <button onClick="location.href='/qr/main'" className="circle-btn bg-lightgray scale-normal dark">
                <img src="/img/back.png" className="back-icon scale-small" alt="뒤로가기"/></button>
                </Link>
                <span className="fs-large black">메뉴</span>
            </div>

            {/* <!-- 카테고리 --> */}
            <div className="tab-menu-wrap">
                <ul className="tab-menu">
                    <li>
                        <Link to="/qr/products/list" className="tab-menu-item">
                            <span th:cslassappend="${cateId == null ? 'active': ''}">전체</span>
                        </Link>
                    </li>
                    <th:block th:if="${cateList != null}" th:each="cate : ${cateList}">
                        <li><a th:href="|/qr/list?cate=${cate.id}|" className="tab-menu-item">
                                <span th:classNameappend="${cate.id == cateId ? 'active': ''}"
                                    th:text="${cate.name}"></span>
                            </a></li>
                    </th:block>
                </ul>
            </div>
            <div className="line"></div>
        </div>

        {/* <!-- 카드 --> */}
        <div className="scrollable-content">
            <th:block th:if="${noticeList != null && !noticeList.isEmpty()}">
                <div className="event">
                    <ul id="event-list">
                        <th:block th:if="${noticeList != null && !noticeList.isEmpty()}" th:each="notice : ${noticeList}">
                            <li th:onClick="eventModalOpen([[${notice.id}]])">
                                <img th:src="|/timg?id=${notice.id}|" alt="이벤트카드"/>
                            </li>
                        </th:block>
                    </ul>
                </div>
            </th:block>
            <th:block th:if="${productList != null}" th:each="product : ${productList}">
                <Link to="/qr/products/read">
                <a th:href="|/qr/read/${product.id}|">
                    <div className="card flex justify-content-start align-items-center mt-3">
                        <img th:src="|/pimg?id=${product.id}|" th:alt="${product.name}" className="menu-image ml-1"/>
                        <div className="info-box">
                            <div className="top-area p-10 mb-1 ml-1">
                                <span className="menu-name" th:text="${product.name}"></span>
                                <span className="menu-price"
                                    th:text="${#numbers.formatInteger(product.price, 3, 'COMMA') + '원'}"></span>
                            </div>
                            {/* <!-- TODO:Product 객체 Files 객체 포함하고 xml java 매퍼 파일 수정 --> */}
                            <div className="bot-area">
                                <span className="menu-info p-10 ml-1" th:text="${product.description}"></span>
                                {/* <!-- 아이콘: 신메뉴/추천메뉴/인기메뉴 --> */}
                                <div className="btn-box">
                                    <th:blcok th:if="${favorite}">
                                        <i className="product-icon bg-blue">인기</i>
                                    </th:blcok>
                                    <th:blcok th:if="${recommend}">
                                        <i className="product-icon bg-red">추천</i>
                                    </th:blcok>
                                    <th:blcok th:if="${newmenu}">
                                        <i className="product-icon bg-yellow">NEW</i>
                                    </th:blcok>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                </Link>
            </th:block>
        </div>

        {/* <!-- 하단 / 아이콘 --> */}
        <div className="c-icon-fix">
            <Link to="/qr/products/cart">
            <button type="button" className="c-icon" onClick="location.href='/qr/products/cart'">
                <img src="/img/cart.png" alt="장바구니" className="c-icon"/>
            </button>
            </Link>
        </div>
    </div>

)
    {/* <!-- 이벤트 모달 팝업(전체화면) --> */}
    <div id="event-modal">
        <button id="event-modal-close" type="button" onClick="eventModalClose()">
            <span className="material-symbols-outlined">close</span>
        </button>
        <div id="event-modal-body"></div>
    </div>
}

export default ProductList