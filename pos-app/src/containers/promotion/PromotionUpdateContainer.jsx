import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as notice from '../../apis/notice'
import PromotionUpdate from '../../components/promotion/PromotionUpdate'


const PromotionUpdateContainer = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [proList, setProList] = useState({})
  const [thumbFile, setThumbFile] = useState()
  const [contentFile, setContentFile] = useState()

  // 프로모션 데이터 요청
  const getProList = async () => {
    const response = await notice.list(id)
    const data = await response.data
    setProList(data)
    setThumbFile(data.thumbFile)
    setContentFile(data.contentFile)

  }

  // 프로모션 수정 요청 이벤트
  const proUpdate = async (FormData, headers) => {
    try {
      const response = await notice.update(FormData, headers)
      const data = await response.data
      console.log(data);

      alert('프로모션 수정 완료')
      
      navigate('/promotion')
      
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
                         thumbFile={thumbFile}
                         contentFile={contentFile} />
    </>
  )
}

export default PromotionUpdateContainer