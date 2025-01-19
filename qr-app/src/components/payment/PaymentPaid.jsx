import React, { useContext, useEffect, useRef, useState } from 'react'
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk"
import * as paymentStyles from './css/payments.css'
import * as payments from '../../apis/payment'
import { LoginContext } from '../../contexts/LoginContextProvider'
const PaymentPaid = () => {

  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"
  const customerKey = "UDkBzTf8DT65qg_pjsT3Z"

  const paymentWidgetRef = useRef < import('@tosspayments/payment-widget-sdk').PaymentWidgetInstance | null > (null)
  const [price, setPrice] = useState(0)
  const {usersId,orderType} = useContext(LoginContext)

  // 결제창 호출하기
  const goPayments = async () => {
    const paymentWidget = paymentWidgetRef.current

    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      })
    } catch (err) {
      console.log(err)
    }
  }
  // 결제취소
  const cancelPayments = () => {

  }

  useEffect(() => {
    (async () => {
      // 주문번호 생성후 불러오기
      const response = await payments.toPaid(usersId,orderType)
      // 결제창 위젯 불러오기
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)

      paymentWidget.renderPaymentMethods("#payment-widget", price)

      paymentWidgetRef.current = paymentWidget
    })()
  }, [])

  return (
    <>
      <div id="payment-widget" />
      <div className={paymentStyles.btn-box}>
        {/* <!-- 결제하기 버튼 --> */}
        <button className="button" id="payment-button" onClick={goPayments}>결제하기</button>
        {/* <!-- 결제 취소 버튼 --> */}
        <button className="button" id="cart-button" onClick={cancelPayments}>결제취소</button>
      </div>
    </>
  )
}

export default PaymentPaid