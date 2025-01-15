import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const Cart = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <CartContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Cart