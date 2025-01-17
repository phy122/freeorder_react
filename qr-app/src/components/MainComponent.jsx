import React from 'react'
import { Link } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div className="main-container">
        <div className="allcenter">
            <div className="flex flex-column justify-content-center align-items-center">
                <div className="qr-order mb-5">QR order</div>

                {/* <!-- 매장 식사 --> */}
                <Link to="/list?type=HERE"
                    className="rectangle flex flex-column justify-content-center align-items-center gap-2">
                    <img src="/img/qrHall.png" alt="qr매장" width="100px"/>
                    <span className="square-button fw-1 white">매장식사</span>
                </Link>

                {/* <!-- 포장 --> */}
                <Link to="/list?type=TOGO"
                    className="rectangle flex flex-column justify-content-center align-items-center gap-2">
                    <img src="/img/qrTakeout.png" alt="qr포장" width="100px"/>
                    <span className="square-button fw-1 white">포장</span>
                </Link>
            </div>
        </div>
        {/* <!-- 공지사항 팝업 --> */}

    </div>
  )
}

export default MainComponent