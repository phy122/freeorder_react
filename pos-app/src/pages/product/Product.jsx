import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import ProductContainer from '../../containers/product/ProductContainer'
import { LoginContext } from '../../contexts/LoginContextProvider'

const Product = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <ProductContainer/>
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Product