import React from 'react';
import styles from './Promotion.module.css'
import { Link } from 'react-router-dom';


const Promotion = ({ proList }) => {
    return (
        <div>
            <div className={styles['promotion-page']}>
                <h1>프로모션</h1>
                <Link to='/promotion/insert'>
                <a href="/promotion/insert" className={styles['insert-btn']}>
                    프로모션 등록
                </a>
                </Link>
            </div>

            <table className={styles['promotion-list']}>
                {proList && proList.length > 0 ? (
                    <>
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
                            {proList.map((pro, index) => (
                                <tr key={pro.id}>
                                    <td>{index + 1}</td>
                                    <td>{pro.title}</td>
                                    <td>
                                        <img
                                            src={`/timg?id=${pro.id}`}
                                            alt={`${pro.title} 썸네일`}
                                            width="100px"
                                        />
                                    </td>
                                    <td>{new Date(pro.createdAt).toLocaleDateString()}</td>
                                    <td>{new Date(pro.updatedAt).toLocaleDateString()}</td>
                                    <td>
                                        <a
                                            className={styles['update-btn']}
                                            href={`/promotion/update/${pro.id}`}
                                        >
                                            수정
                                        </a>
                                        <button
                                            type="button"
                                            className={styles['delete-btn']}
                                            onClick={() => promotionDelete(pro.id)}
                                        >
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </>
                ) : (
                    <tbody>
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>
                                등록된 프로모션이 없습니다.
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
};

// 삭제 함수 (예시)
const promotionDelete = (id) => {
    console.log(`프로모션 삭제: ${id}`);
};

export default Promotion;
