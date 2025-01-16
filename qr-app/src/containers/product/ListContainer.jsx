import React from 'react'
import ProductList from '../../components/product/ProductList'
import { useState ,useEffect } from 'react'
import * as products from '../../apis/product'
const ListContainer = () => {

  const [cateList, setCateList] = useState([])
  const [proList, setProList] = useState([])
  const [noticeList, setNoticeList] = useState([])

  // 카테고리 목록 불러오기
  const cateLoad = async () => {
    const response = await products.cateList()
    const data = response.data
    const status = response.status
    if (status == 200) {
      setCateList(data)
    }
  }

  // 상품 목록 불러오기
  const productLoad = async (cateId) => {
    const response = await products.list(cateId)
    const data = response.data
    const status = response.status
    console.dir(data)
    if (status == 200) {
      setProList(data)
    }
  }

  // 프로모션 불러오기
  const noticeLoad = async () => {
    const response = await products.notices()
    const data = response.data
    const status = response.status
    if (status == 200) {
      setNoticeList(data)
    }
  }


  useEffect(() => {
    cateLoad()
    productLoad()
    noticeLoad()
    return () => {}
  }, [])
  

  return (
    <>
    <ProductList
     
     proList = {proList}
     cateList={cateList}
     noticeList = {noticeList}
     
     />
    </>
  )
}

export default ListContainer