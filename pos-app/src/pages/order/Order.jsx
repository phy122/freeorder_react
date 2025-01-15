import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const Order = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <OrderContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Order