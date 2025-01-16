import React from 'react'
import ProductSelectOptionContainer from '../../containers/product/ProductSelectOptionContainer'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const ProductSelectOption = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <ProductSelectOptionContainer />
      <Footer />
    </div>
    <Sidebar />
  </>
  )
}

export default ProductSelectOption