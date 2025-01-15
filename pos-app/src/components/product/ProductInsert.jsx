import React from 'react'
import './Product.css'

const ProductInsert = () => {
    return (
        <div class="i-container">
            <form class="insert-form" enctype="multipart/form-data" id="pro-insert" onsubmit="return false">
                <h2>상품 정보</h2>

                <div class="form-group">
                    <label for="name">상품명</label>
                    <input type="text" name="name" id="name" placeholder="상품명을 입력하세요." required />
                </div>

                <div class="form-group">
                    <label for="price">가격</label>
                    <input type="number" name="price" id="price" placeholder="가격을 입력하세요." required />
                </div>

                <div class="form-group">
                    <label for="description">상품 설명</label>
                    <textarea name="description" id="description" placeholder="상품 설명을 입력하세요."></textarea>
                </div>

                <div class="form-group">
                    <label for="categoriesId">카테고리</label>
                    <select name="categoriesId" id="categoriesId" required>
                        <option value="">카테고리 선택</option>
                        <th:block th:each="cate : ${cateList}">
                            <option th:value="${cate.id}" th:text="${cate.name}"></option>
                        </th:block>
                    </select>
                </div>

                <div class="form-group">
                    <label for="productFile">상품 이미지</label>
                    <input type="file" name="productFile" id="productFile" />
                </div>

                <div class="form-group">
                    <label for="optionId">옵션</label>
                    <div class="plus-box" onclick="selectOptions(this)"><a>+선택</a></div>
                    <ul id="optionList"></ul>
                    <input type="hidden" name="optionsId" id="optionsId" />
                </div>

                <div class="button-group">
                    <button type="button" onclick="location='/pos/product'" class="cancel-btn">취소</button>
                    <button type="button" onclick="proInsert()" class="submit-btn">등록</button>
                </div>
            </form>
        </div>
    )
}

export default ProductInsert