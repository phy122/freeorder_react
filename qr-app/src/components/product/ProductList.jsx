import React from 'react'
import { Link } from 'react-router-dom'
import './css/styles.css'

const ProductList = ({ cateList, proList, noticeList }) => {
  return (
    <>
      <div className="container">
        {/* <!-- 상단 / 뒤로가기 --> */}
        <div className="header">
          <div className="back">
            <Link to="/">
              <button onClick="location.href='/qr/main'" className="circle-btn bg-lightgray scale-normal dark">
                <img src="/img/back.png" className="back-icon scale-small" alt="뒤로가기" /></button>
            </Link>
            <span className="fs-large black">메뉴</span>
          </div>

          {/* <!-- 카테고리 --> */}
          <div className="tab-menu-wrap">
            <ul className="tab-menu">
              <li>
                <Link to="/qr/products/list" className="tab-menu-item">
                  <span>전체</span>
                </Link>
              </li>
              {
                cateList?.map((cate) => (
                  <li key={cate.id}>
                    <a className="tab-menu-item">
                      <span>{cate.name}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="line"></div>
        </div>

        {/* <!-- 카드 --> */}
        <div className="scrollable-content">
          {
            noticeList != null ??
            (<div className="event">
              <ul id="event-list">
                {
                  noticeList.map((notice)=>(
                    <li key={notice.id}>
                      <img src={`/api/timg?id=${notice.id}`} alt="이벤트카드" />
                    </li>
                  ))
                }
              </ul>
            </div>
            )
          }
          {
            proList.map((product) => (
              <Link to={`/products/read/${product.id}`} key={product.id}>
                <a >
                  <div className="card flex justify-content-start align-items-center mt-3">
                    <img src={`/api/pimg?id=${product.id}`} alt={product.name} className="menu-image ml-1" />
                    <div className="info-box">
                      <div className="top-area p-10 mb-1 ml-1">
                        <span className="menu-name">{product.name}</span>
                        <span className="menu-price">{product.price}</span>
                      </div>
                      {/* <!-- TODO:Product 객체 Files 객체 포함하고 xml java 매퍼 파일 수정 --> */}
                      <div className="bot-area">
                        <span className="menu-info p-10 ml-1">{product.description}</span>
                        {/* <!-- 아이콘: 신메뉴/추천메뉴/인기메뉴 --> */}
                        <div className="btn-box">
                          <th:blcok th:if="${favorite}">
                            <i className="product-icon bg-blue">인기</i>
                          </th:blcok>
                          <th:blcok th:if="${recommend}">
                            <i className="product-icon bg-red">추천</i>
                          </th:blcok>
                          <th:blcok th:if="${newmenu}">
                            <i className="product-icon bg-yellow">NEW</i>
                          </th:blcok>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          }

        </div>

        {/* <!-- 하단 / 아이콘 --> */}
        <div className="c-icon-fix">
          <Link to="/qr/products/cart">
            <button type="button" className="c-icon" onClick="location.href='/qr/products/cart'">
              <img src="/img/cart.png" alt="장바구니" className="c-icon" />
            </button>
          </Link>
        </div>
      </div>
      {/* <!-- 이벤트 모달 팝업(전체화면) --> */}
      <div id="event-modal">
        <button id="event-modal-close" type="button" onClick="eventModalClose()">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div id="event-modal-body"></div>
      </div>
    </>
  )

}

export default ProductList