import React from 'react'
import './Category.css'

const CategoryList = () => {
  return (
    <div className="container" layout:fragment="content">
        <div className="category-page">
            <div className="category-header">
                <h1>카테고리</h1>
                <a className="add-category-btn" href="/category/insert">+ 추가</a>
            </div>
            <div className="category-list">
                <th:block th:if="${ cateList != null }" th:each="cate : ${cateList}">
                    <div className="category-item" draggable="true">
                        <span className="category-name" th:text="${cate.name}"></span>
                        <a className="edit-btn" th:href="|/pos/category/update/${cate.id}|">수정</a>
                    </div>
                </th:block>
                <th:block th:if="${ cateList.isEmpty()}">
                    카테고리가 없습니다.
                </th:block>
            </div>
        </div>
    </div>
  )
}

export default CategoryList