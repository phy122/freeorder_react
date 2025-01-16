import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductlocateContainer from '../../containers/product/ProductlocateContainer'

const Productlocate = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <ProductlocateContainer />
      <Footer />
    </div>
    <Sidebar />
  </>
  )
}

export default Productlocate