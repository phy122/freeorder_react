import React from 'react'
import { Link } from 'react-router-dom'

const ProductCart = () => {
  return (
    <div className="container cart-container">

        {/* <!-- 상단 / 뒤로가기 --> */}
        <div className="header">
            <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
                <Link to="/qr/products/list">
                <button className="circle-btn bg-lightgray scale-normal dark"><img
                        src="/img/back.png" className="back-icon scale-small" alt="뒤로가기"/></button>
                </Link>
                <span className="fs-large black">장바구니</span>
            </div>
            {/* <!-- 카테고리 --> */}
            <div className="top">
                <div className="tab-menu-wrap">
                    <ul className="tab-menu db-tab-menu">
                        <li>
                            <Link to="/qr/products/cart" className="tab-menu-item">
                                <span className="active">장바구니</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/qr/order/list" className="tab-menu-item">
                                <span>주문내역</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="line"></div>
            </div>
        </div>
        <th:block th:if="${cartList.isEmpty()}">
            <div className="empty-info pt-140">
                <div className="info-icon">
                    <span className="material-symbols-outlined">local_mall</span>
                </div>
                <span className="empty-title">장바구니가 비어있습니다.</span>
                <Link to="/qr/products/list" className="add-btn">
                    <span className="material-symbols-outlined">add</span>
                    <span>장바구니 담으러가기</span>
                </Link>
            </div>
        </th:block>
        <th:block th:if="${!cartList.isEmpty()}" className="order-cont">
            {/* <!-- [중단] 장바구니 리스트 카드
            
            - 상품이미지
            - 상품명
            - 가격
            - 수량
            - 옵션 변경
            - 삭제
            --> */}
            <div className="scrollable-content">
                {/* <!-- 전체 삭제 버튼 --> */}
                <div className="delete-all flex justify-content-center align-items-center mr-5 mt-1">
                    <button type="button" className="delete-all-btn white" onclick="deleteAllCartItems()">전체삭제</button>
                </div>

                <ul className="cart-list flex flex-column justify-content-start align-items-center gap-2">
                    <th:block th:each="cart : ${cartList}">
                        <li className="c-card flex flex-column justify-content-center align-items-center">
                            <div className="item-info flex">
                                <div className="list-left">
                                    <div className="left-left">
                                        <img th:src="|/pimg?id=${cart.productsId}|" alt="페퍼로니 피자" className="menu-image" />
                                    </div>
                                    <div className="right-right mr-1">
                                        <div className="menu-name" th:text="${cart.productName}"></div>
                                        <div className="price-amount">
                                            <div className="c-price" th:text="${#numbers.formatInteger(cart.price, 3, 'COMMA') + '원'}"></div>
                                    <div className="amount" th:text="${'|' + ' ' + cart.amount + '개'}"></div>
                                    </div>
                                    <ul className="option-list">
                                        <th:block th:if="${cart.optionList != null}" th:each=" option : ${cart.optionList}">
                                            <li>
                                                <span th:text="'+' + ${option.name}"></span>
                                                <span th:text="${#numbers.formatInteger(option.price, 3, 'COMMA') + '원'}"></span>
                                            </li>
                                        </th:block>
                                    </ul>
                                </div>
                            </div>
                            <div className="list-right">
                                <th:block th:if="${cart.optionsId != null}">
                                    <button type="button" th:onclick="openModal([[${cart.id}]])" className="option">옵션변경</button>
                                </th:block>
                                <button type="button" className="cancel color-main" th:onclick="cartDelete([[${cart.id}]])">삭제</button>
                            </div>
                        </div>
                    </li>
                </th:block>
            </ul>
            </div>
        
            {/* <!-- [하단] 	
            - 총 금액
            - 결제하기 
            --> */}
            <div className="total-card-fix">
                <th:block>
                    <div className="total-card flex justify-content-around align-items-center">
                        <div className="total">TOTAL : </div>
                        <div className="total-price" th:text="${#numbers.formatInteger(total, 3, 'COMMA') + '원'}"></div>
                        <a href="#" className="pay-btn" onclick="validateCart(event)">
                            <span className="square-button flex flex-column justify-content-center align-items-center mt-1">결제하기</span>
                        </a>
                    </div>
                </th:block>
            </div>
            {/* <!-- 옵션변경 모달 --> */}
            <div id="option-modal">
                <button type="button" className="circle-btn bg-lightgray scale-normal dark" id="close-modal">X</button>
                <div className="modal-wrap">
                    <div id="modal-body"></div>
                </div>
            </div>
        </th:block>

    </div>
  )
}

export default ProductCart