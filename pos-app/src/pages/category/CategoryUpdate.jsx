import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import CategoryUpdateContainer from '../../containers/category/CategoryUpdateContainer'

const CategoryUpdate = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <CategoryUpdateContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default CategoryUpdate