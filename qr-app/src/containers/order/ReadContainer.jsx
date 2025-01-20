import React, { useEffect, useState } from 'react'
import OrderRead from '../../components/Order/OrderRead'
import * as orders from '../../apis/order'
import { useParams } from 'react-router-dom'

const ReadContainer = () => {

  const [order, setOrder] = useState(null)
  const { id } = useParams()
  const orderRead = async () => {
    const response = await orders.select(id)
    const data = response.data
    const status = response.status
    setOrder(data)
  }
  useEffect(() => {
    orderRead()
  }, [])
  
  return (
    <>
    <OrderRead order = {order} />
    </>
  )
}

export default ReadContainer