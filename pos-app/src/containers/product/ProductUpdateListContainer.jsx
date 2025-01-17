import React, { useEffect, useState } from 'react'
import ProductUpdateList from '../../components/product/ProductUpdateList'
import * as products from '../../apis/product'

const ProductUpdateListContainer = () => {

  // state
  const [proUpdateList, setProUpdateList] = useState([])

  const getProUpdateList = async () => {
    try {
      const response = await products.list()
      const data = await response.data
      console.log('response:', response.data); 
      // const list = data.list
      // console.log('Product List:', list)
      setProUpdateList(data)
    } catch (error) {
      console.error("상품 목록을 불러오는 데 실패했습니다.", error)
    }
  }


  useEffect(() => {
    getProUpdateList()
    return () => { }
  }, [])


  return (
    <>
      <ProductUpdateList
        proUpdateList={proUpdateList}
      />
    </>
  )
}

export default ProductUpdateListContainer