import React from 'react'

const Productlocate = () => {
  return (
    <div className="l-container" layout:fragment="content">
        <div className="l-btn-container">
            <a href="/pos/product">
                <button type="button" className="l-cancel-btn">취소</button>
            </a>
            <button type="button" className="l-save-btn" id="saveBtn" onclick="setupSaveProductOrder()">저장</button>
        </div>

        <div className="l-select-title">
            <h3>상품을 끌어서 순서를 변경하세요.</h3>
        </div>

        <div className="l-product-list">
            <th:block th:if="${productList != null}" th:each="product, iterStat : ${productList}">
                <div className="l-product-card" draggable="true">
                    <div className="product-image-placeholder">
                        <img th:src="|/pimg?id=${product.id}|" alt="" width="100%" height="100%" draggable="false"
                            ondragover="preventDrop(event)" ondrop="preventDrop(event)"/>
                    </div>
                    <span className="product-name" th:text="${product.name}" th:data-id="${product.id}"></span>
                    <span className="product-price" th:text="${product.price}"></span>
                    <span className="product-seq" th:text="${product.seq}"></span>
                </div>
            </th:block>
            <th:block th:if="${productList.isEmpty()}">
                상품이 없습니다.
            </th:block>
        </div>
    </div>
  )
}

export default Productlocate