import React from 'react'
import { Link } from 'react-router-dom'

const ProductRead = () => {
  return (
    <div className="container pb-35">
        <form id="cart-insert">
            <input type="hidden" th:field="${product.id}"/>
            {/* <!-- [상단] 상품명,닫기버튼 --> */}
            <Link to="/qr/products/list">
            <div className="back flex justify-content-between align-items-center gap-2 p-10 bg-white">

                <span className="menu-pop-name fs-large black ml-5" th:text="${product.name}"></span>

                <button type="button" onClick="location.href='/qr/list'"
                    className="circle-btn bg-lightgray scale-normal dark"><img src="/img/exit.png"
                    className="back-icon scale-small" alt="나가기"/></button>
            </div>
            </Link>

            {/* <!-- [중단] 상품정보 - 이미지,설명,수량--> */}
            <div className="read-png-p p-30">
                <img th:src="|/pimg?id=${product.id}|" className="read-png" th:alt="${product.name}" width="100px"/>
                <div className="des-box">
                    <div className="menu-des-left"><p>설명 : </p></div>
                    <div className="menu-pop-des"><p th:text="${product.description}"></p></div>
                </div>
                <div className="flex align-items-center">
                    <span className="menu-pop-price fs-large black ml-1 mt-3" th:text="${product.price} + '원'"></span>
                    <div className="amount-select flex align-items-center justify-content-end mr-1 mt-3 white">
                        <button type="button" className="quantity-minus scale-small white">-</button>
                        <input type="number" className="quantity white" name="quantity" id="quantity" max="10" min="1" value="1"
                        readonly/>
                        <button type="button" className="quantity-plus scale-small white">+</button>
                    </div>
                </div>
            </div>

            {/* <!-- [중단] 옵션선택 - 체크박스,옵션명,가격,수량 --> */}
            <th:block th:if="${option != null}">
                <input type="hidden" id="optionsId" th:value="${option.id}"/>
                <div className="title mt-5 mb-5 ml-4 fs-normal">옵션 선택</div>
                <div className="checkbox-container ml-5 mb-5">
                    <th:block th:if="${itemList != null and not itemList.isEmpty()}" th:each="item, iterStat : ${itemList}">
                        <div>
                            <label className="option-checkbox flex align-items-center mr-5 ml-5" th:for="${item.id}">
                                <input type="checkbox" th:id="${item.id}" name="itemList" th:value="${item.id}"/>
                                <span th:text="${item.name}"></span>
                                <div className="read-option-price mr-5">
                                    <span th:text="${#numbers.formatInteger(item.price, 3, 'COMMA') + '원'}"></span>
                                </div>
                            </label>
                        </div>
                    </th:block>
                </div>
            </th:block>
        </form>
        {/* <!-- [하단] 장바구니 추가 버튼 --> */}
        <Link to="/qr/products/list">
        <div className="change-btn-border">
            <button type="button" onClick="cartInsert()" className="change-btn white">장바구니에 담기</button>
        </div>
        </Link>
    </div>
  )
}

export default ProductRead