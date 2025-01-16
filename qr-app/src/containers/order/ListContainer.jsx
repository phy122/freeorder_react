import React from 'react'
import { useState } from 'react'
import OrderList from '../../components/order/OrderList'

const ListContainer = () => {
  const [orderList, setOrderList] = useState([])
  return (
    <>
      <OrderList orderList = {orderList} />
    </>
  )
}

export default ListContainer