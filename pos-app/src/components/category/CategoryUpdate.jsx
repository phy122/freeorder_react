import React from 'react'

const CategoryUpdate = () => {
  return (
    <div class="container" layout:fragment="content">
        <div class="category-edit-page">
            <h1>카테고리 수정</h1>
            <form class="category-form" id="cate-update">
                <input type="hidden" name="id" th:value="${category.id}"/>
                <label for="category-name">카테고리 이름</label>
                <input type="text" id="name" name="name" th:value="${category.name}" required />

                {/* <!-- <label for="category-description">카테고리 설명</label>
                <textarea id="category-description" name="category-description" rows="4">현재 카테고리 설명</textarea> --> */}
                <div class="ud-btn">
                    <button type="button" class="update-btn" onclick="cateUpdate()">수정</button>
                    <button type="button" class="delete-btn" onclick="cateDelete()">삭제</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CategoryUpdate