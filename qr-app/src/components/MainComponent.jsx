import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const MainComponent = () => {
  const navigator = useNavigate()
  // 주문 타입 설정
  const setOrderType = (type) => {
    Cookies.set("orderType",type)
    navigator(`/list`)
  }
  return (
    <div className="main-container">
      <div className="allcenter">
        <div className="flex flex-column justify-content-center align-items-center">
          <div className="qr-order mb-5">QR order</div>

          {/* <!-- 매장 식사 --> */}
          <a onClick={()=>setOrderType(`HERE`)}
            className="rectangle flex flex-column justify-content-center align-items-center gap-2">
            <img src="/img/qrHall.png" alt="qr매장" width="100px" />
            <span className="square-button fw-1 white">매장식사</span>
          </a>

          {/* <!-- 포장 --> */}
          <a onClick={()=>setOrderType(`TOGO`)}
            className="rectangle flex flex-column justify-content-center align-items-center gap-2">
            <img src="/img/qrTakeout.png" alt="qr포장" width="100px" />
            <span className="square-button fw-1 white">포장</span>
          </a>
        </div>
      </div>
      {/* <!-- 공지사항 팝업 --> */}

    </div>
  )
}

export default MainComponent