import React from 'react'
import ProductSettingContainer from '../../containers/product/ProductSettingContainer'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const ProductSetting = () => {
  return (
    <>
    <div className="layout">
      <Header />
      <ProductSettingContainer />
      <Footer />
    </div>
    <Sidebar />
  </>
  )
}

export default ProductSetting