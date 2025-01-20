import React, { useEffect, useRef } from 'react'
import PaymentCom from '../../components/payment/PaymentComplete'
import { useSearchParams } from 'react-router-dom';
import * as payments from '../../apis/payment'

const CompleteContainer = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const paymentType = searchParams.get("paymentType")
  const ordersId = searchParams.get("orderId")
  const paymentKey = searchParams.get("paymentKey")
  const amount = searchParams.get("amount")

  const payRef = useRef(false)

  // 웹소켓 연결 POS에 실시간으로 주문정보 전송
  const ws = useRef(WebSocket | null)
  const WebSocketURL = `ws`

  const paymentSend = async () => {
    const response = await payments.confirm({
      paymentType : paymentType,
      ordersId : ordersId,
      paymentKey : paymentKey,
      amount : amount
    })
    const data = response.data
    const status = response.status
    if (status == 200) {
      console.log(`결제완료`)
    }
  }

  useEffect(() => {
    if (payRef.current) return
    payRef.current = true
    paymentSend()
  }, [])
  

  return (
    <PaymentCom/>
  )
}

export default CompleteContainer