import React from 'react'

const PaymentFail = () => {
  return (
    <div className="container" layout:fragment="content">
        <div className="allcenter">
            <div className="flex flex-column justify-content-center align-items-center">

                {/* <!-- 실패 메시지 --> */}
                <div className="payFail"><img src="/img/payFail.png" alt="결제 완료" width="110"/></div>
                <div className="fail-text flex align-items-center justify-content-center">결제 실패</div>
                <div className="fail-text-list flex align-items-center justify-content-center">결제에 실패 하였습니다.<br/>잠시후 다시 시도해
                    주세요.</div>

                {/* <!-- 장바구니로 이동 --> */}
                <div className="ok-btn-border flex flex-column align-items-center justify-content-center">
                    <a href="/qr/cart" className="go-cart white mb-5"><span
                            className="ok-button-text white flex flex-column justify-content-center align-items-center mt-2">장바구니로
                            이동</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentFail