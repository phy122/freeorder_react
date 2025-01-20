import React, { useEffect, useState } from 'react'
import * as orders from '../../apis/order'
import OrderList from '../../components/Order/OrderList'


const ListContainer = () => {
  const [orderList, setOrderList] = useState([])

  // 주문 목록 불러오기
  const orderLoad = async () => {
    const response = await orders.list()
    const data = response.data
    const status = response.status
    if (status == 200) {
      setOrderList(data)
    }
  }


  useEffect(() => {
    orderLoad()
    return () => {}
  }, [])
  

  return (
    <>
      <OrderList 
      orderList = {orderList} />
    </>
  )
}

export default ListContainer