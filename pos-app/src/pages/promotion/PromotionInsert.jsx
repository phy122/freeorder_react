import React from 'react'
import Header from '../../components/header/Header'
import LeftMenu from '../../components/leftmenu/LeftMenu'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import PromotionInsertContainer from '../../containers/promotion/PromotionInsertContainer'

const PromotionInsert = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div class="more-layout">
          <LeftMenu />
          <PromotionInsertContainer />
        </div>
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default PromotionInsert