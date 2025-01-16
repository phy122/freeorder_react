import React from 'react'
import OptionInsertContainer from '../../containers/option/OptionInsertContainer'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const OptionInsert = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <OptionInsertContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default OptionInsert