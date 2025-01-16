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
        <div class="more-layout">
          <LeftMenu />
          <SaleContainer />
        </div>
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Sale