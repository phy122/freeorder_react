import React, { useEffect, useState } from 'react'
import Notice from '../../components/notice/Notice'
import * as notice from '../../apis/notice'

const NoticeContainer = () => {

  const notiInsert = async (formData, headers) => {
    try {
      const response = await notice.insert(formData, headers)
      const data = await response.data
      console.log(data);

      alert('공지사항 등록 완료')

    } catch (error) {
      console.log(error);
      
    }
  }
  
  return (
    <>
    <Notice notiInsert={notiInsert} />
    </>
  )
}

export default NoticeContainer