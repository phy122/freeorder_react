import React from 'react'

const PaymentComplete = () => {
  return (
    <div className="container" layout:fragment="content">
        <div className="allcenter">
            <div className="flex flex-column justify-content-center align-items-center">
                {/* <!-- 완료 메시지 --> */}
                <div className="payComplete"><img src="/img/payComplete.png" alt="결제 완료" width="300"/></div>
                <div className="compl-text flex align-items-center justify-content-center">결제 완료!</div>
                {/* <!-- 결제 영수증 출력 --> */}


                {/* <!-- 확인, 결제 내역 --> */}
                <div className="ok-btn-border flex flex-column align-items-center justify-content-center">
                    <a href="/qr/list" className="ok-button white mb-5"><span
                            className="ok-button-text white flex flex-column justify-content-center align-items-center mt-2">OK</span></a>
                    <a href="/qr/order/list" className="pay-list white"><span
                            className="color-white flex flex-column justify-content-center align-items-center mt-2">결제
                            내역</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentComplete