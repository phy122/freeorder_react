import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import CategoryContainer from '../../containers/category/CategoryContainer'

const Category = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <CategoryContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default Category