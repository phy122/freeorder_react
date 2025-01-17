import React from 'react'
import { Link } from 'react-router-dom'
import './css/styles.css'

const ProductList = ({ cateList, proList, noticeList, infoModalPopup }) => {

  return (
    <>
      <div className="container">
        {/* <!-- 상단 / 뒤로가기 --> */}
        <div className="header">
          <div className="back">
            <Link to="/">
              <button className="circle-btn bg-lightgray scale-normal dark">
                <img src="/img/back.png" className="back-icon scale-small" alt="뒤로가기" />
              </button>
            </Link>
            <span className="fs-large black">메뉴</span>
          </div>

          {/* <!-- 카테고리 --> */}
          <div className="tab-menu-wrap">
            <ul className="tab-menu">
              <li>
                <Link to="/list" className="tab-menu-item">
                  <span>전체</span>
                </Link>
              </li>
              {
                cateList?.map((cate) => (
                  <li key={cate.id}>
                    <Link to={`/list?cate=${cate.id}`} className="tab-menu-item">
                      <span>{cate.name}</span>
                    </Link>
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
            noticeList != null ?
              (<div className="event">
                <ul id="event-list">
                  {
                    noticeList.map((notice) => (
                      <li key={notice.id}>
                        <img src={`/api/timg?id=${notice.id}`} alt="이벤트카드" />
                      </li>
                    ))
                  }
                </ul>
              </div>
              )
              :
              ''
          }
          {
            proList.map((product) => (
              <div
                className="card flex justify-content-start align-items-center mt-3"
                key={product.id}
                onClick={() => infoModalPopup(product.id)}
              >
                <img src={`/api/pimg?id=${product.id}`} alt={product.name} className="menu-image ml-1" />
                <div className="info-box">
                  <div className="top-area p-10 mb-1 ml-1">
                    <span className="menu-name">{product.name}</span>
                    <span className="menu-price">{product.price}</span>
                  </div>
                  <div className="bot-area">
                    <span className="menu-info p-10 ml-1">{product.description}</span>
                    <div className="btn-box">
                      {
                        product?.favorite ?
                          <i className="product-icon bg-blue">인기</i>
                          :
                          ''
                      }
                      {
                        product?.recommend ?
                          <i className="product-icon bg-red">추천</i>
                          :
                          ''
                      }
                      {
                        product?.newmenu ?
                          <i className="product-icon bg-yellow">NEW</i>
                          :
                          ''
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

        {/* <!-- 하단 / 아이콘 --> */}
        <div className="c-icon-fix">
          <Link to="/cart">
            <button type="button" className="c-icon">
              <img src="/img/cart.png" alt="장바구니" className="c-icon" />
            </button>
          </Link>
        </div>
      </div>
    </>
  )

}

export default ProductList