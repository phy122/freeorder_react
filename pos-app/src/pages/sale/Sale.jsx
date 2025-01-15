import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import SaleContainer from '../../containers/sale/SaleContainer'
import LeftMenu from '../../components/leftmenu/LeftMenu'

const Sale = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <LeftMenu />
        <SaleContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Sale