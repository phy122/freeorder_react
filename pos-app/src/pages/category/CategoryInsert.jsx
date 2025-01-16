import React from 'react'
import Header from '../../components/header/Header'
import CategoryInsertContainer from '../../containers/category/CategoryInsertContainer'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'

const CategoryInsert = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <CategoryInsertContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default CategoryInsert