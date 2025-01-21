import React from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../utils/format';

const OrderList = ({ orderList }) => {
  return (
    <div className="container">
      {/* <!-- [상단]	뒤로가기 --> */}
      <div className="header">
        <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white">
          <Link to="/list">
            <button className="circle-btn bg-lightgray scale-normal dark">
              <img
                src="/img/back.png"
                className="back-icon scale-small"
                alt="뒤로가기"
              />
            </button>
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
        {/* <!-- [중단] 주문 목록 --> */}
        <div className="ord-scroll">
          {orderList != null ? (
            orderList.map((order) => (
              <div className="ord-complete" key={order.id}>
                {/* <!-- 이미지 파일 --> */}
                <img
                  src={`/api/pimg?id=${order.itemList[0].productsId}`}
                  alt=""
                />
                {/* <!-- 주문 정보 --> */}
                <div className="order-info">
                  <div className="date-status">
                    <p>{format.formatDate(order.orderedAt)}</p>
                    <p>·</p>
                    <p>{order.status == 'PAID' ? '결제완료' : '주문완료'}</p>
                  </div>

                  <button className="detail-ord">
                    <Link to={`/order/read/${order.id}`}>주문상세</Link>
                  </button>
                </div>

                {/* <!-- 메뉴 정보 --> */}
                <div className="ord-menu">
                  <ul>
                    <li className="ord-name">
                      <Link to={`/order/read/${order.id}`}>{order.title}</Link>
                    </li>
                    <li className="ord-price">
                      <span href="#">총 가격 : </span>
                      <span>{order.totalPrice.toLocaleString()}원</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-info">
              <div className="info-icon">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <span className="empty-title">주문 내역이 없습니다.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
