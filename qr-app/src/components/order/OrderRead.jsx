import React from 'react'
import { Link } from 'react-router-dom'
import * as format from '../../utils/format'

const OrderRead = ({ order }) => {
  return (
    <div className="container" layout:fragment="content">

      {/* <!-- [상단]	뒤로가기 --> */}
      <div className="header">
        <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
          <Link to="/list">
            <button className="circle-btn bg-lightgray scale-normal dark"><img
              src="/img/back.png" className="back-icon scale-small" alt="뒤로가기" /></button>
          </Link>
          <span className="fs-large black">주문 내역</span>
        </div>

        {/* <!-- [상단]	카테고리 --> */}
        <div className="tab-menu-wrap">
          <ul className="tab-menu db-tab-menu">
            <li>
              <Link to="/cart" className="tab-menu-item">
                <span>장바구니</span>
              </Link>
            </li>
            <li>
              <Link to="/order/list" className="tab-menu-item">
                <span className="active">주문내역</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
      {/* <!-- [중단] 주문 상세 --> */}
      {
        order != null ?
          <>
            {/* <!-- 주문 정보 --> */}
            <div className="order-summary">
              <h3 className="order-title">{order.title}</h3>
              <p className="order-date">주문 날짜 : {format.formatDate(order.orderedAt)}</p>
              <p className="order-status">상태 : {order.status == 'PAID' ? '결제완료' : '주문완료'}</p>
            </div>

            {/* <!-- 주문 아이템 목록 --> */}
            {
              order.itemList != null ?
                <div className="scrollable-content" id="read-scrollabe">
                  {
                    order.itemList.map((item) => (
                      <div className="order-card" key={item.id}>
                        {/* <!-- 상품명 --> */}
                        <div className="menu-name fs-large fw-1">{item.name}</div>

                        {/* <!-- 기본 가격 --> */}
                        <div className="order-item">
                          <div className="option-title">기본 :</div>
                          <span className="order-options">{item.price.toLocaleString()}원</span>
                        </div>

                        {/* <!-- 옵션 목록 --> */}
                        <div className="order-item">
                          <div className="option-title">옵션 :</div>
                          <ul className="option-list">
                            {
                              item.optionList.map((option) => (
                                <li key={option.id}>
                                  <span className="order-options">{`${option.name}(+ ${option.price.toLocaleString()}원)`}</span>
                                </li>
                              ))
                            }
                          </ul>
                        </div>

                        {/* <!-- 수량 및 총 금액 --> */}
                        <div className="order-quantity">
                          <span>{`수량 : ${item.quantity}개`}</span>
                        </div>
                        <div className="price fw-1">{`합계 : ${item.amount.toLocaleString()}원`}</div>
                      </div>
                    ))
                  }
                </div>

                :
                ''
            }
            {/* <!-- 총 금액 --> */}
            <div className="total-card-fix">
              <div className="total">TOTAL :</div>
              <div className="total-list-price">{order.totalPrice.toLocaleString()}원</div>
            </div>
          </>
          :
          <div className="empty-info">
            <div className="info-icon">
              <span className="material-symbols-outlined">receipt_long</span>
            </div>
            <span className="empty-title">주문 상세 내역이 없습니다.</span>
          </div>
      }
    </div>
  )
}

export default OrderRead