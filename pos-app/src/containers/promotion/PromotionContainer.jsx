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
      const response = await notice.remove(id);
      const data = await response.data;
      console.log(data);  // 응답 데이터 확인
      alert('프로모션 삭제 완료');
      getPro();  // 삭제 후 목록을 다시 갱신
    } catch (error) {
      console.log('삭제 실패:', error);  // 오류 메시지 출력
      alert('삭제에 실패했습니다.');
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