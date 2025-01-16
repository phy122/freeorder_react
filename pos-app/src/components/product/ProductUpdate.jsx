import React from 'react'
import styles from './Product.module.css'

const ProductUpdate = () => {
  return (
    <div className={styles['i-container']} layout:fragment="content">
        <h2>상품 수정</h2>
        <form className={styles['form-group']} id="pro-update" method="post">
            <input type="hidden" name="id" th:value="${product.id}"/>

            <div className={styles['form-group']}>
                <label for="name">상품명</label>
                <input type="text" name="name" id="name" th:value="${product.name}" placeholder="상품명을 입력하세요." required/>
            </div>

            <div className={styles['form-group']}>
                <label for="price">가격</label>
                <input type="number" name="price" id="price" th:value="${product.price}" placeholder="가격을 입력하세요."
                    required/>
            </div>

            <div className={styles['form-group']}>
                <label for="description">상품 설명</label>
                <textarea name="description" id="description" th:text="${product.description}"
                    placeholder="상품 설명을 입력하세요."></textarea>
            </div>

            <div className={styles['form-group']}>
                <label for="categoriesId">카테고리</label>
                <select name="categoriesId" id="categoriesId" required>
                    <option value="">카테고리 선택</option>
                    <th:block th:each="cate : ${cateList}">
                        <option th:value="${cate.id}" th:text="${cate.name}" th:selected="${cate.id == product.categoriesId}"></option>
                    </th:block>
                </select>
            </div>

            <div className={styles['form-group']}>
                <label for="productFile">상품 이미지</label>
                <input type="file" name="productFile" id="productFile"/>
            </div>

            <div className={styles['form-group']}>
                <label for="optionId">옵션</label>
                <div className={styles['plus-box']} onclick="selectOptions(this)"><a>+선택</a></div>
                <ul id="optionList"></ul>
                <input type="hidden" name="optionsId" id="optionsId" th:value="${product.optionsId}"/>
            </div>

            <div className={styles['button-group']}>
                <button type="button" onclick="proDelete()" className={styles['cancel-btn']}>삭제</button>
                <button type="button" onclick="proUpdate()" className={styles['submit-btn']}>저장</button>
            </div>
        </form>
    </div>
  )
}

export default ProductUpdate