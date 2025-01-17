import React, { useState } from 'react'
import PromotionUpdate from '../../components/promotion/PromotionUpdate'
import * as notice from '../../apis/notice'

const PromotionUpdateContainer = () => {

  const [proList, setProList] = useState({})
  const [thumbFile, setThumbFile] = useState([])
  const [contentFile, setContentFile] = useState([])

  // 프로모션 데이터 요청
  const getProList = async () => {
    const response = await notice.list
    const data = await response.data
    setProList(data.list)
    setThumbFile(data.thumbFile)
    setContentFile(data.contentFile)

    const thumb = await data.notice.thumbFile
    getThumbFile(thumb)

    const content = await data.notice.contentFile
    getContentFile(content)
  }

  // 프로모션 수정 요청 이벤트
  const proUpdate = async (FormData, headers) => {
    try {
      const response = await notice.update(FormData, headers)
      const data = await response.data
      console.log(data);

      alert('프로모션 수정 완료')
      
    } catch (error) {
      console.log(error);
      
    }
  }

  // 프로모션 삭제 요청 이벤트
  const proDelete = async (id) => {
    try {
      const response = await notice.remove(id)
      const data = await response.data
      console.log(data);

      alert('프로모션 삭제 완료')
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProList()
    
  }, [])
  
  return (
    <>
        <PromotionUpdate proList={proList}
                         proUpdate={proUpdate}
                         proDelete={proDelete}
                         thumbFile={thumbFile}
                         contentFile={contentFile} />
    </>
  )
}

export default PromotionUpdateContainer