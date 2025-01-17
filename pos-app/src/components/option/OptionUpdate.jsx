import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Option.module.css';

const OptionUpdate = ({ option, optionUpdate, optionDelete }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [optionName, setOptionName] = useState('');  // 초기값을 빈 문자열로 설정

    const changeOptionName = (e) => {
        setOptionName(e.target.value);
    };

    // 수정된 옵션 데이터를 서버로 전송
    const onSubmit = async (e) => {
        e.preventDefault();  // form의 기본 동작을 막기 위해서 추가

        if (!optionName) {
            alert('옵션 이름을 입력해주세요.');
            return;
        }
    
        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', optionName); // 'name' 키로 전달
    
        const headers = {
            'Content-Type': 'multipart/form-data'
        };
    
        try {
            await optionUpdate(formData, headers); 
        } catch (error) {
            console.error('옵션 수정 실패', error);
            alert('옵션 수정에 실패했습니다.');
        }
    };

    // 삭제 처리
    const handleDelete = () => {
        const check = window.confirm('정말로 삭제하시겠습니까?');
        if (check) {
            optionDelete(id); 
            navigate('/options'); 
        }
    };

    useEffect(() => {
        if (option && option.name) {
            setOptionName(option.name); 
        }
    }, [option]);

  return (
    <div className={styles.container}>
        <div className={styles['i-container']}>
            <h2>옵션 그룹 수정</h2>
            <form onSubmit={onSubmit} method="post" id="opt-insert">
                <div className={styles['form-group']}>
                    <label htmlFor="name">옵션 그룹명</label>
                    <input
                        type="text"
                        id="name"
                        value={optionName}  
                        onChange={changeOptionName}
                        placeholder="옵션 그룹명을 입력해주세요."
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <button type="button" className={styles['plus-box']}>
                        <i className="material-symbols-outlined">add_circle</i>
                        <span>옵션 추가</span>
                    </button>
                </div>
                <div className={styles['button-group']}>
                    <button
                        type="button"
                        className={styles['delete-btn']}
                        onClick={handleDelete}
                    >
                        삭제
                    </button>
                    <button
                        type="submit"
                        className={styles['update-btn']}
                    >
                        수정
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default OptionUpdate;
