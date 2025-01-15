import React from 'react'

const ProductOption = () => {
  return (
    <div className="option-container">
        <div className="container bg-white border10">
            {/* <!-- [상단] 닫기
            - 상품명
            - 옵션 변경 
            --> */}
            <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white border10">
                <span className="menu-pop-name fs-large black ml-5"
                    th:text="${product != null and product.name != null ? product.name: ''}"></span>
            </div>

            <div className="option-name ml-1 mb-5 mt-3">옵션변경</div>
            {/* <!-- [중단] 옵션 리스트	
                - 체크박스
                - 옵션명
                - 가격
                - 수량
                --> */}
            <form onsubmit="return false" id="cart-update">
                <input type="hidden" th:field="${cart.id}"/>
                <th:block th:if="${product.option != null}">
                    <input type="hidden" id="optionsId" th:value="${product.option.id}"/>
                    <input type="hidden" id="productsId" th:value="${product.id}"/>
                    <div className="title mt-5 mb-5 ml-4 fs-normal">옵션 선택</div>
                    <div className="checkbox-container ml-5 mb-5">
                        <th:block th:if="${optionList != null and not optionList.isEmpty()}"
                            th:each="item, iterStat : ${optionList}">
                            <label className="option-checkbox flex align-items-center mr-5 ml-5" th:for="${item.id}">
                                <input type="checkbox" th:id="${item.id}" name="itemList" th:value="${item.id}" th:checked="${item.checked ? true : false}"/>
                                <span th:text="${item.name}"></span>
                                <div className="read-option-price mr-5">
                                    <span th:text="${#numbers.formatInteger(item.price, 3, 'COMMA') + '원'}"></span>
                                </div>
                            </label>
                        </th:block>
                    </div>
                </th:block>
            </form>
        </div>

        {/* <!-- [하단] 변경하기 --> */}
        <div className="change-btn-border">
            <button className="change-btn white" onclick="editCart()">변경하기</button>
        </div>
    </div>
  )
}

export default ProductOption