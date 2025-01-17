import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import CategorySeqListContainer from '../../containers/category/CategorySeqListContainer'

const CategorySeqList = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <CategorySeqListContainer />
        <Footer />
      </div>
      <Sidebar />
    </>
  )
}

export default CategorySeqList