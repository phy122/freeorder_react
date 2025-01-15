import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import PaymentContainer from '../../containers/payment/PaymentContainer'

const Payment = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <PaymentContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Payment