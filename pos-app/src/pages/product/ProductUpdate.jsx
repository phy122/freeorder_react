import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductUpdateContainer from '../../containers/product/ProductUpdateContainer'

const ProductUpdate = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <ProductUpdateContainer />
      <Footer />
    </div>
    <Sidebar />
  </>
  )
}

export default ProductUpdate