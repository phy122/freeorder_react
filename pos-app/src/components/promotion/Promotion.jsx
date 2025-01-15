import React from 'react'
import './Promotion.css'

const Promotion = () => {
    return (
        <div>
            <div className="promotion-page">
                <h1>프로모션</h1>
                <a href="/pos/promotion/insert" className="insert-btn">프로모션 등록</a>
            </div>
            <table className="promotion-list">
                <th:block th:if="${proList != null and !proList.isEmpty()}">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>프로모션명</th>
                            <th>썸네일</th>
                            <th>등록일자</th>
                            <th>수정일자</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th:block th:each="pro, stat : ${proList}">
                            <tr>
                                <td th:text="${stat.index + 1}">1</td>
                                <td th:text="${pro.title}">프로모션 이름</td>
                                <td>
                                    <img th:src="|/timg?id=${pro.id}|" alt="" width="100px" />
                                </td>
                                <td th:text="${#dates.format(pro.createdAt, 'yyyy-MM-dd')}">2024-12-06</td>
                                <td th:text="${#dates.format(pro.updatedAt, 'yyyy-MM-dd')}">2024-12-06</td>
                                <td>
                                    <a className="update-btn" th:href="@{/pos/promotion/update/{id}(id=${pro.id})}">수정</a>
                                    <button type="button" className="delete-btn" th:onclick="promotionDelete([[${pro.id}]])">삭제</button>
                                </td>
                            </tr>
                        </th:block>
                    </tbody>
                </th:block>

                <th:block th:if="${proList == null or proList.isEmpty()}">
                    <tbody>
                        <tr>
                            <td colspan="6" style="text-align: center;">등록된 프로모션이 없습니다.</td>
                        </tr>
                    </tbody>
                </th:block>
            </table>
        </div>
    )
}

export default Promotion