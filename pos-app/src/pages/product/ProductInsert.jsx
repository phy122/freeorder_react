import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductInsertContainer from '../../containers/product/ProductInsertContainer'

const ProductInsert = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <ProductInsertContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default ProductInsert