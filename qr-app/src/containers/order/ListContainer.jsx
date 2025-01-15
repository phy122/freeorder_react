import React from 'react'
import { useState } from 'react'
import ProductList from '../../components/order/ProductList'

const ListContainer = () => {
  const [productList, setProductList] = useState([])
  return (
    <>
      <ProductList productList = {productList} />
    </>
  )
}

export default ListContainer