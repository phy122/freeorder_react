import React from 'react'
import PromotionInsert from '../../components/promotion/PromotionInsert'
import * as notice from '../../apis/notice'
import { useNavigate } from 'react-router-dom'

const PromotionInsertContainer = () => {

  const navigate = useNavigate()

  const proInsert = async (formData, headers) => {
    try {
      const response = await notice.insert(formData, headers)
      const data = await response.data
      console.log(data);

      alert('프로모션 등록 완료')

      navigate('/promotion')
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
        <PromotionInsert proInsert={proInsert}/>
    </>
  )
}

export default PromotionInsertContainer