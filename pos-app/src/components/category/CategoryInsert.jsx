import React from 'react'

const CategoryInsert = () => {
  return (
    <div class="container" layout:fragment="content">
        <div class="category-register-page">
            <h1>카테고리 등록</h1>
            <form class="category-form" id="cate-insert">
                <label for="category-name">카테고리 이름</label>
                <input type="text" id="name" name="name" placeholder="카테고리 이름을 입력하세요" required />
                {/* <!-- <label for="category-description">카테고리 설명</label> --> */}
                {/* <!-- <textarea id="description" name="description" placeholder="카테고리 설명을 입력하세요" rows="4"></textarea> --> */}
                <button type="button" class="submit-btn" onclick="cateInsert()">등록</button>
            </form>
        </div>
    </div>
  )
}

export default CategoryInsert