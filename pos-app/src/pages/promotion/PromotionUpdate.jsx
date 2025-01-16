import React from 'react'
import PromotionUpdateContainer from '../../containers/promotion/PromotionUpdateContainer'
import Header from '../../components/header/Header'
import LeftMenu from '../../components/leftmenu/LeftMenu'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const PromotionUpdate = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div class="more-layout">
          <LeftMenu />
          <PromotionUpdateContainer />
        </div>
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default PromotionUpdate