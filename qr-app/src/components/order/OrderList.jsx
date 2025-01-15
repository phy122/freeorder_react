import React from 'react'
import { Link } from 'react-router-dom'

const OrderList = () => {
  return (
    <div className="container" layout:fragment="content">
        {/* <!-- [상단]	뒤로가기 --> */}
        <div className="header">
            <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
                <Link to="/qr/products/list">
                <button onclick="location.href='/qr/list'" className="circle-btn bg-lightgray scale-normal dark"><img
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
            {/* <!-- [중단] 주문 목록 --> */}
             <div th:if="${orderList != null and !orderList.isEmpty()}" className="order-list">
                <div th:each="order : ${orderList}" className="ord-complete">
                    {/* <!-- 이미지 파일 --> */}
                    <img src="#" alt=""/>
                    {/* <!-- 주문 정보 --> */}
                    <div className="order-info">
                        <div className="date-status">
                            <p th:text="${#dates.format(order.orderedAt, 'yyyy.MM.dd(E)')}"></p>
                            <p>·</p>
                            <p th:text="${order.status=='PAID' ? '결제완료' : '주문완료'}"></p>
                        </div>
                        <Link to="/qr/order/read">
                        <button className="detail-ord">
                            <a th:href="@{/qr/order/read/{id}(id=${order.id})}">주문상세</a>
                        </button>
                        </Link>
                    </div>

                     {/* <!-- 메뉴 정보 --> */}
                    <div className="ord-menu">
                        <ul>
                            <li className="ord-name"><a th:href="@{/qr/order/read(id=${order.id})}" th:text="${order.title}"></a></li>
                            <li className="ord-price">
                                <a href="#">총 가격 : </a>
                                <a th:text="${#numbers.formatInteger(order.totalPrice, 3, 'COMMA') + '원'}"></a>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>

              {/* <!-- 주문이 없을 때 --> */}
            <div th:if="${orderList == null or orderList.isEmpty()}" className="empty-info pt-140">
                <div className="info-icon">
                    <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <span className="empty-title">주문 내역이 없습니다.</span>
            </div>
        </div>
    </div>
  )
}

export default OrderList