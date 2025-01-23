import React, { useEffect, useState } from 'react'

const ProductRead = ({ productInfo, addCart, eventModalClose, quantity, quantityCount }) => {
  
  const option = productInfo?.option
  const [itemList, setItemList] = useState(option?.itemList ?? [])
  const form = document.getElementById('cart-insert')
  // 체크박스 상태 변경 처리
  const handleCheckboxChange = (id) => {
    setItemList((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    )
    console.dir(itemList)
  }
  // 폼 전송
  const onSubmitCart = () => {
    const id = productInfo?.id
    const quantity = form.quantity.value
    const optionsId = productInfo?.optionsId
    const data = {
      id: id,
      quantity: quantity,
      optionsId: optionsId,
      option: {
        id: optionsId,
        itemList: itemList
      }
    }
    // console.log(`폼전송 요청`)
    // console.dir(data)
    addCart( data )
  }
  useEffect(() => {
    if (option?.itemList) {
      setItemList(option.itemList);
    }
  }, [option?.itemList]);

  return (
    <div className="container pb-35">
      <form id="cart-insert" >
        {/* <!-- [상단] 상품명,닫기버튼 --> */}
        <div className="back flex justify-content-between align-items-center gap-2 p-10">
          <span className="menu-pop-name fs-large black ml-5">{productInfo?.name}</span>
          <button type="button" className="circle-btn bg-lightgray scale-normal dark" onClick={eventModalClose}>
            <img src="/img/exit.png" className="back-icon scale-small" alt="나가기" />
          </button>
        </div>

        {/* <!-- [중단] 상품정보 - 이미지,설명,수량--> */}
        <div className="read-png-p p-30">
          <img src={`/api/pimg?id=${productInfo?.id}`} className="read-png" alt={productInfo?.name} width="100px" />
          <div className="des-box">
            <div className="menu-des-left"><p>설명 : </p></div>
            <div className="menu-pop-des"><p>{productInfo?.description}</p></div>
          </div>
          <div className="flex align-items-center">
            <span className="menu-pop-price fs-large black ml-1 mt-3">{productInfo?.price.toLocaleString()}원</span>
            <div className="amount-select flex align-items-center justify-content-end mr-1 mt-3 white">
              <button type="button"
                onClick={() => quantityCount(quantity == 1 ? false : (-1))}
                className="quantity-minus scale-small white">-</button>
              <input type="number" className="quantity white" name="quantity" value={quantity} readOnly />
              <button type="button"
                onClick={() => quantityCount(quantity == 10 ? false : (+1))}
                className="quantity-plus scale-small white">+</button>
            </div>
          </div>
        </div>

        {/* <!-- [중단] 옵션선택 - 체크박스,옵션명,가격,수량 --> */}
        {
          option != null ?

            <>
              <input type="hidden" id="optionsId" name='optionsId' value={productInfo?.optionsId} />
              <div className="title mt-5 mb-5 ml-4 fs-normal">옵션 선택</div>
              <div className="checkbox-container ml-5 mb-5">
                {
                  option?.itemList.map((item) => (
                    <div key={item.id}>
                      <label className="option-checkbox flex align-items-center mr-5 ml-5" htmlFor={item.id}>
                        <input type="checkbox" id={item.id} onChange={()=>handleCheckboxChange(item.id)} name="itemList" value={item.id} />
                        <span>{item.name}</span>
                        <div className="read-option-price mr-5">
                          <span>{item.price.toLocaleString()}원</span>
                        </div>
                      </label>
                    </div>
                  ))
                }
              </div>
            </>

            :

            ''
        }
      </form>
      {/* <!-- [하단] 장바구니 추가 버튼 --> */}
      <div className="change-btn-border">
        <button type="button" className="change-btn white" onClick={onSubmitCart}>장바구니에 담기</button>
      </div>
    </div>
  )
}

export default ProductRead