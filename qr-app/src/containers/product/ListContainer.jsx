import React from 'react'
import ProductList from '../../components/product/ProductList'
const ListContainer = ({ cateList, proList, noticeList, infoModalPopup, eventModalClose, productInfo }) => {

  return (
    <>
      <ProductList
        proList={proList}
        cateList={cateList}
        noticeList={noticeList}
        infoModalPopup={infoModalPopup}
        eventModalClose={eventModalClose}
        productInfo={productInfo}
      />
    </>
  )
}

export default ListContainer