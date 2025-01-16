import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import LeftMenu from '../../components/leftmenu/LeftMenu'
import NoticeContainer from '../../containers/notice/NoticeContainer'

const Notice = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div class="more-layout">
          <LeftMenu />
          <NoticeContainer />
        </div>
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Notice