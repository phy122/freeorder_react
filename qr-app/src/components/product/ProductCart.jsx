import React from 'react'
import { Link } from 'react-router-dom'
import './css/cart.css'
import * as Swal from '../../apis/alert'
const ProductCart = ({
   totalPrice, 
   cartList, 
   openModal, 
   closeModal, 
   deleteAllCartItems, 
   cartDelete, 
   menuPayment,
    }) => {
  const onPayment = () => {
    Swal.confirm(`결제 하시겠습니까?` , `총 결제 금액 : ${ totalPrice.toLocaleString()}원 `,`success`,()=>{
      menuPayment()
    })
  }
  return (
    <div className="container cart-container">
      {/* <!-- 상단 / 뒤로가기 --> */}
      <div className="header">
        <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
          <Link to="/list">
            <button className="circle-btn bg-lightgray scale-normal dark"><img
              src="/img/back.png" className="back-icon scale-small" alt="뒤로가기" /></button>
          </Link>
          <span className="fs-large black">장바구니</span>
        </div>
        {/* <!-- 카테고리 --> */}
        <div className="top">
          <div className="tab-menu-wrap">
            <ul className="tab-menu db-tab-menu">
              <li>
                <Link to="/cart" className="tab-menu-item">
                  <span className="active">장바구니</span>
                </Link>
              </li>
              <li>
                <Link to="/order/list" className="tab-menu-item">
                  <span>주문내역</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="line"></div>
        </div>
      </div>
      {
        (cartList == null || cartList.length == 0) ?
          <div className="empty-info pt-140">
            <div className="info-icon">
              <span className="material-symbols-outlined">local_mall</span>
            </div>
            <span className="empty-title">장바구니가 비어있습니다.</span>
            <Link to="/list" className="add-btn">
              <span className="material-symbols-outlined">add</span>
              <span>장바구니 담으러가기</span>
            </Link>
          </div>
          :
          <div className="scrollable-content">
            {/* <!-- 전체 삭제 버튼 --> */}
            <div className="delete-all flex justify-content-center align-items-center mr-5 mt-1">
              <button type="button" className="delete-all-btn white" onClick={deleteAllCartItems}>전체삭제</button>
            </div>

            <ul className="cart-list flex flex-column justify-content-start align-items-center gap-2">
              {
                cartList.map((cart) => (
                  <li key={cart.id} className="c-card flex flex-column justify-content-center align-items-center">
                    <div className="item-info flex">
                      <div className="list-left">
                        <div className="left-left">
                          <img src={`/api/pimg?id=${cart.productsId}`} alt={cart.name} className="menu-image" />
                        </div>
                        <div className="right-right mr-1">
                          <div className="menu-name">{cart.productName}</div>
                          <div className="price-amount">
                            <div className="c-price">{cart.price.toLocaleString()}원</div>
                            <div className="amount">| {cart.amount}개</div>
                          </div>
                          <ul className="option-list">
                            {
                              cart.optionList?.map((option) => (
                                <li key={option.id}>
                                  <span>{`+${option.name}`}</span>
                                  <span>({option.price.toLocaleString()}원)</span>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="list-right">
                        {
                          cart?.optionsId != null ?
                            <button type="button" onClick={() => openModal(cart.id)} className="option">옵션변경</button>
                            :
                            ''
                        }
                        <button type="button" className="cancel color-main" onClick={() => cartDelete(cart.id)}>삭제</button>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
            {/* <!-- [하단] 	
            - 총 금액
            - 결제하기 
            --> */}
            <div className="total-card-fix">
              <div className="total-card flex justify-content-around align-items-center">
                <div className="total">TOTAL : </div>
                <div className="total-price" >{totalPrice.toLocaleString()}원</div>
                <button onClick={onPayment} className="pay-btn square-button flex flex-column justify-content-center align-items-center mt-1">결제하기</button>
              </div>
            </div>
          </div>
      }
      
    </div>
  )
}

export default ProductCart