import React from 'react'

const productList = ({ productList}) => {
  return (
    <div class="container" layout:fragment="content">
        {/* <!-- [상단]	뒤로가기 --> */}
        <div class="header">
            <div class="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
                <button onclick="location.href='/qr/list'" class="circle-btn bg-lightgray scale-normal dark">
                <img src="/img/back.png" class="back-icon scale-small" alt="뒤로가기" /></button>
                <span class="fs-large black">주문 내역</span>
            </div>

            {/* <!-- [상단]	카테고리 --> */}
            <div class="tab-menu-wrap">
                <ul class="tab-menu db-tab-menu">
                    <li>
                        <a href="/qr/cart" class="tab-menu-item">
                            <span>장바구니</span>
                        </a>
                    </li>
                    <li>
                        <a href="/qr/order" class="tab-menu-item">
                            <span class="active">주문내역</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="line"></div>
            {/* <!-- [중단] 주문 목록 --> */}
             <div th:if="${orderList != null and !orderList.isEmpty()}" class="order-list">
                <div th:each="order : ${orderList}" class="ord-complete">
                    {/* <!-- 이미지 파일 --> */}
                    <img src="#" alt=""/>
                    {/* <!-- 주문 정보 --> */}
                    <div class="order-info">
                        <div class="date-status">
                            <p th:text="${#dates.format(order.orderedAt, 'yyyy.MM.dd(E)')}"></p>
                            <p>·</p>
                            <p th:text="${order.status=='PAID' ? '결제완료' : '주문완료'}"></p>
                        </div>
                        <button class="detail-ord">
                            <a th:href="@{/qr/order/read/{id}(id=${order.id})}">주문상세</a>
                        </button>
                    </div>

                     {/* <!-- 메뉴 정보 --> */}
                    <div class="ord-menu">
                        <ul>
                            <li class="ord-name"><a th:href="@{/qr/order/read(id=${order.id})}" th:text="${order.title}"></a></li>
                            <li class="ord-price">
                                <a href="#">총 가격 : </a>
                                <a th:text="${#numbers.formatInteger(order.totalPrice, 3, 'COMMA') + '원'}"></a>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>

              {/* <!-- 주문이 없을 때 --> */}
            <div th:if="${orderList == null or orderList.isEmpty()}" class="empty-info pt-140">
                <div class="info-icon">
                    <span class="material-symbols-outlined">receipt_long</span>
                </div>
                <span class="empty-title">주문 내역이 없습니다.</span>
            </div>
        </div>
    </div>
  )
}

export default productList