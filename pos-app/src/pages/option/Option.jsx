import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import OptionContainer from '../../containers/option/OptionContainer'

const Option = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <OptionContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Option