import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductUpdateListContainer from '../../containers/product/ProductUpdateListContainer'

const ProductUpdateList = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <ProductUpdateListContainer />
      <Footer />
    </div>
    <Sidebar />
  </>
  )
}

export default ProductUpdateList