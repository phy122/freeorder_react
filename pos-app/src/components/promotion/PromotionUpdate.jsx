import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Promotion.module.css';

const PromotionUpdate = ({proList, proUpdate}) => {

    const { id } = useParams()

    const [title, setTitle] = useState('')
    const [type, setType] = useState('promotion')
    const [thumbFile, setThumbFile] = useState(null)
    const [contentFile, setContentFile] = useState(null)

    const changeTitle = (e) => { setTitle( e.target.value )}

    // 섬네일 변경 이벤트
    const changeThumbFile = (e) => { setThumbFile(e.target.files[0])}
    const changeContentFile = (e) => { setContentFile(e.target.files[0])}

    const promotionUpdate = () => {
        const formData = new FormData()
        // 공지사항 정보 세팅
        formData.append("id", id)
        formData.append("title", title)
        formData.append("type", type)
        

        // 파일 데이터 세팅
        if( thumbFile ) {
            formData.append('thumbFile', thumbFile)
        }
        if ( contentFile ) {
            formData.append('contentFile', contentFile)
        }
        // 헤더
        const headers = {
            'Constent-type' : 'multipart/form-data'
        }
        proUpdate(formData, headers)
    }

    useEffect(() => {
      if (proList) {
        setTitle(proList.title)
        setType(proList.type)
        setThumbFile(proList.thumbFile)
        setContentFile(proList.contentFile)
      }
    }, [proList])
    
    return (
        <div className={styles['container']} layout-fragment="content">
            <div className={styles['promotion-edit-page']}>
                <h1>프로모션 수정</h1>
                <form className={styles['promotion-form']} id="pro-update">
                    <input type="hidden" name="type" value="promotion" />
                    {/* <input type="hidden" name="id" value="12345" /> */}
                    
                    <label htmlFor="title">프로모션 이름</label>
                    <input 
                        type="text" 
                        defaultValue={title}
                        onChange={changeTitle}
                        className={styles['form-input']}
                        required 
                    />
                    
                    {/* 
                    <label htmlFor="promotion-description">프로모션 설명</label>
                    <textarea 
                        id="promotion-description" 
                        name="promotion-description" 
                        placeholder="프로모션 설명을 입력하세요" 
                        rows="4" 
                    />
                    */}

                    <label htmlFor="thumbFile">썸네일</label>
                    <input 
                        type="file" 
                        defaultValue={thumbFile}
                        onChange={changeThumbFile}
                        className={styles['form-input']} 
                    />

                    <label htmlFor="contentFile">프로모션 내용</label>
                    <input 
                        type="file" 
                        defaultValue={contentFile}
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
