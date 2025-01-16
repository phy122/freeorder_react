import React, { useEffect, useState } from 'react'
import ProductList from '../../components/product/ProductList'
import * as products from '../../apis/product'
import * as categories from '../../apis/category'

const ProductContainer = () => {

  const [cateList, setCateList] = useState([])
  const [proList, setProList] = useState([])

  // 카테고리 목록 불러오기
  const cateLoad = async () => {
    try {
      const response = await categories.list()
      const data = response.data
      const status = response.status
      if (status == 200) {
        setCateList(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  // 상품 목록 불러오기
  const listLoad = async (cateId) => {
    try {
      const response = await products.list(cateId)
      const data = response.data
      const status = response.status
      if (status == 200) {
        setProList(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    cateLoad()
    listLoad()
    return () => {}
  }, [])
  

  return (
    <>
      <ProductList 
        cateList={cateList}
        proList={proList}
      />
    </>
  )
}

export default ProductContainer