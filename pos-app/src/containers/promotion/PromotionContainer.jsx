import React, { useEffect, useState } from 'react'
import * as notice from "../../apis/notice"
import Promotion from '../../components/promotion/Promotion'

const PromotionContainer = () => {

  const [proList, setProList] = useState([])

  // 프로모션 목록 데이터
  const getPro = async () => {
    const response = await notice.list()
    const data = await response.data
    
    setProList( data )
  }

  const promotionDelete = async (id) => {
    try {
          const response = await notice.remove(id)
          const data = await response.data
          console.log(data);
          console.log(`프로모션 삭제: ${id}`);
          alert('프로모션 삭제 완료')
          
        } catch (error) {
          console.log(error);
          
        }
};

  useEffect(() => {
    getPro()
  },[])

  console.log("proList : " + proList)
  return (
    <>
    <Promotion proList={proList} promotionDelete={promotionDelete} />
    </>
  )
}

export default PromotionContainer