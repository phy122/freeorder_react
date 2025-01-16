import React from 'react'
import styles from './Option.module.css'
import { Link } from 'react-router-dom'

const OptionList = () => {
    return (
        <div className={styles['i-container']}>
            <div className={styles['opt-header']}>
                <h2>옵션 관리</h2>
                <Link to='/option/insert'>
                
                <button>
                    <a className={styles['material-symbols-outlined']}>add_circle</a>
                    <a href="#">추가</a>
                </button>
                </Link>
            </div>
            <div className={styles['opt-item-list']}>
                <th:block th:if="${optionList != null}" th:each="option : ${optionList}">
                    <div className={styles['opt-list']}>
                        <div className={styles['opt-list-left']}>
                            <div className={styles['opt-title']}>
                                <a th:text="${option.name}" th:href="|/pos/option/update/${option.id}|"></a>
                            </div>

                            <div className={styles['opt-i-list']}>
                                <th:block th:if="${option.itemList != null and not #lists.isEmpty(option.itemList)}">
                                    <div className={styles['opt-item']} th:each="item : ${option.itemList}">
                                        <a th:text="${item.name}" href="javascript:void(0)"></a>
                                    </div>
                                </th:block>
                            </div>

                            <th:block th:if="${option.itemList == null or #lists.isEmpty(option.itemList)}">
                                <p>아이템 없음</p>
                            </th:block>
                        </div>

                        <div className={styles['opt-list-right']}>
                            <a className={styles['material-symbols-outlined']} th:href="|/pos/option/update/${option.id}|">edit</a>
                        </div>
                    </div>
                </th:block>

                <th:block th:if="${optionList == null or optionList.isEmpty()}">
                    <p>등록된 옵션이 없습니다.</p>
                </th:block>
            </div>
        </div>
    )
}

export default OptionList