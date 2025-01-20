import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Promotion.module.css';

const PromotionUpdate = ({ proList, proUpdate }) => {

  const { id } = useParams()

  const [title, setTitle] = useState('');
  const [type, setType] = useState('promotion');
  const [thumbFile, setThumbFile] = useState(null);
  const [contentFile, setContentFile] = useState(null);

  const changeTitle = (e) => { setTitle(e.target.value) }

  // 섬네일 변경 이벤트
  const changeThumbFile = (e) => { setThumbFile(e.target.files[0]) }
  const changeContentFile = (e) => { setContentFile(e.target.files[0]) }

  const promotionUpdate = () => {
    const formData = new FormData();
    // 프로모션 정보 세팅
    formData.append("id", id);
    formData.append("title", title);
    formData.append("type", type);

    // 파일 데이터 세팅
    if (thumbFile) {
      formData.append('thumbFile', thumbFile);
    }
    if (contentFile) {
      formData.append('contentFile', contentFile);
    }

    // 헤더
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    proUpdate(formData, headers);
  }

  useEffect(() => {
    // proList가 배열이므로 첫 번째 요소를 선택하여 상태를 설정
    if (proList && proList.length > 0) {
      const promotion = proList[0];  // 첫 번째 프로모션 객체
      setTitle(promotion.title);
      setType(promotion.type);
      setThumbFile(promotion.thumbnail);  // 썸네일 파일을 설정
      setContentFile(promotion.contentFile);  // 프로모션 내용 파일 설정
    }
  }, [proList]);

  return (
    <div className={styles['container']} layout-fragment="content">
      <div className={styles['promotion-edit-page']}>
        <h1>프로모션 수정</h1>
        <form className={styles['promotion-form']} id="pro-update">
          <input type="hidden" name="type" value="promotion" />

          <label htmlFor="title">프로모션 이름</label>
          <input
            type="text"
            id="title"
            value={title}  // 상태값을 직접 사용
            onChange={changeTitle}
            className={styles['form-input']}
            required
          />

          <label htmlFor="thumbFile">썸네일</label>
          <input
            type="file"
            onChange={changeThumbFile}
            className={styles['form-input']}
          />

          <label htmlFor="contentFile">프로모션 내용</label>
          <input
            type="file"
            onChange={changeContentFile}
            className={styles['form-input']}
          />

          <button
            type="button"
            className={styles['promotion-update-btn']}
            onClick={promotionUpdate}
          >
            수정
          </button>
        </form>
      </div>
    </div>
  );
};

export default PromotionUpdate;
