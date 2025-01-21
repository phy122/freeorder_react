import React from 'react'
import ProductRead from '../product/ProductRead'
import ProductOption from '../product/ProductOption'

const ProductInfoModal = ({eventModalClose, productInfo, visibleAnime, quantity, quantityCount, addCart}) => {
  return (
    <>
      <div id="event-modal" className={visibleAnime? `slide-up` : `slide-down`}>
        <button id="event-modal-close" type="button">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div id="event-modal-body">
          <ProductRead
            productInfo = {productInfo}
            eventModalClose = {eventModalClose}
            quantity = {quantity}
            quantityCount = {quantityCount}
            addCart = {addCart}
          />
          
        </div>
      </div>
    </>
  )
}

export default ProductInfoModal