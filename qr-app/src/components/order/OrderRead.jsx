import React from 'react'
import { Link } from 'react-router-dom'

const OrderRead = () => {
  return (
    <div className="container" layout:fragment="content">

        {/* <!-- [상단]	뒤로가기 --> */}
        <div className="header">
            <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
            <Link to="/list">
                <button className="circle-btn bg-lightgray scale-normal dark"><img
                        src="/img/back.png" className="back-icon scale-small" alt="뒤로가기"/></button>
            </Link>
                <span className="fs-large black">주문 내역</span>
            </div>

            {/* <!-- [상단]	카테고리 --> */}
            <div className="tab-menu-wrap">
                <ul className="tab-menu db-tab-menu">
                    <li>
                        <Link to="/qr/products/cart" className="tab-menu-item">
                            <span>장바구니</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/qr/order/list" className="tab-menu-item">
                            <span className="active">주문내역</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="line"></div>
        </div>
        {/* <!-- [중단] 주문 상세 --> */}
        <th:block th:if="${order != null}" className="order-cont">
            {/* <!-- 주문 정보 --> */}
            <div className="order-summary">
                <h3 className="order-title" th:text="${order.title}"></h3>
                <p className="order-date" th:text="'주문 날짜 : ' + ${#dates.format(order.orderedAt, 'yyyy.MM.dd HH:mm')}">주문 날짜</p>
                <p className="order-status" th:text="'상태 : ' + ${order.status}">주문 상태</p>
            </div>

            {/* <!-- 주문 아이템 목록 --> */}
            <th:block th:if="${itemList != null and !itemList.isEmpty()}">
                <div className="scrollable-content" id="read-scrollabe">
                    <th:block th:each="item : ${itemList}">
                        <div className="order-card">
                            {/* <!-- 상품명 --> */}
                            <div className="menu-name fs-large fw-1" th:text="${item.name}"></div>

                            {/* <!-- 기본 가격 --> */}
                            <div className="order-item">
                                <div className="option-title">기본 :</div>
                                <span className="order-options"
                                th:text="${item.name + '(+' + #numbers.formatInteger(item.price, 3, 'COMMA') + '원)'}"></span>
                            </div>

                            {/* <!-- 옵션 목록 --> */}
                            <div className="order-item">
                                <div className="option-title">옵션 :</div>
                                <ul className="option-list">
                                    <th:block th:each="option : ${item.optionList}">
                                        <li>
                                            <span className="order-options"
                                                th:text="${option.name + '(+' + #numbers.formatInteger(option.price, 3, 'COMMA') + '원)'}"></span>
                                        </li>
                                    </th:block>
                                </ul>
                            </div>

                            {/* <!-- 수량 및 총 금액 --> */}
                            <div className="order-quantity">
                                <span th:text="'수량: ' + ${item.quantity} + '개'">수량</span>
                            </div>
                            <div className="price fw-1"
                                th:text="'합계 : ' + ${#numbers.formatInteger(item.amount, 3, 'COMMA') + '원'}"></div>
                        </div>
                    </th:block>
                </div>
            </th:block>

            {/* <!-- 총 금액 --> */}
            <div className="total-card-fix">
                <div className="total">TOTAL :</div>
                <div className="total-list-price"
                    th:text="${#numbers.formatInteger(order.totalPrice, 3, 'COMMA') + '원'}"></div>
            </div>
        </th:block>

        {/* <!-- 주문이 없을 때 --> */}
        <th:block th:if="${order.id == null}">
            <div className="empty-info">
                <div className="info-icon">
                    <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <span className="empty-title">주문 상세 내역이 없습니다.</span>
            </div>
        </th:block>
    </div>
  )
}

export default OrderRead