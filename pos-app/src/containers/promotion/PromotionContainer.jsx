import React, { useEffect, useState } from 'react'
import * as notice from "../../apis/notice"
import Promotion from '../../components/promotion/Promotion'

const PromotionContainer = () => {

  const [proList, setProList] = useState([])

  // 프로모션 목록 데이터
  const getProList = async () => {
    const response = await notice.list()
    const data = await response.data
    const list = data.list
    console.dir(data)
    console.dir(data.list)

    setProList( list )
  }

  useEffect(() => {
    getProList()
  },[])

  return (
    <>
    <Promotion proList={proList}/>
    </>
  )
}

export default PromotionContainer