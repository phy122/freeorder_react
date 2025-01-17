import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import OptionUpdateContainer from '../../containers/option/OptionUpdateContainer'

const OptionUpdate = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <OptionUpdateContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default OptionUpdate