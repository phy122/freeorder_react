import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductOption = ({ product, optionList, cart, updateCart }) => {
  // console.dir(product);
  // console.dir(cart);
  // console.dir(optionList);
  const [itemList, setItemList] = useState([]);

  const handleCheckbox = (e, itemId) => {
    const { checked } = e.target

    if (checked) {
      
      setItemList((prev) => [...prev, itemId])

    } else {
      setItemList((prev) => 
        prev.filter((item) => item !== itemId))
    }
  }

  useEffect(() => {
    const initiallyCheckde = optionList
    .filter((item) => item.checked)
    .map((item) => item.id)
    setItemList(initiallyCheckde)
  }, [optionList])
  

  const onSubmit = (e) => {
    console.log('폼전송');

    e.preventDefault();
    const form = e.target;
    const cartsId = cart.id;
    const productsId = product.id;
    const cartOptions = optionList
    .filter((item) => itemList.includes(item.id))
    .map((item) => ({
      optionItemsId: item.id
    }))
    // console.dir(form);
    let data = {
      id: cartsId,
      productsId: productsId,
      optionList: cartOptions,
    };
    updateCart(data)
  };
  return (
    <div className="option-container ">
      <div className="container bg-white border10">
        {/* <!-- [상단] 닫기
            - 상품명
            - 옵션 변경
            --> */}
        <div className="back flex justify-content-start align-items-center gap-2 p-10 bg-white border10">
          <span className="menu-pop-name fs-large black ml-5">
            {product?.name || ''}
          </span>
        </div>
        <div className="option-name ml-1 mb-5 mt-3">옵션변경</div>

        {/* <!-- [중단] 옵션 리스트
                - 체크박스
                - 옵션명
                - 가격
                - 수량
                --> */}
        <form id="cart-update" onSubmit={onSubmit}>
          <input type="hidden" value={cart?.id || ''} />

          {product?.option && (
            <>
              <input
                type="hidden"
                id="optionsId"
                value={product.option.id || ''}
              />
              <input type="hidden" id="productsId" value={product.id || ''} />

              <div className="title mt-5 mb-5 ml-4 fs-normal">옵션 선택</div>

              <div className="checkbox-container ml-5 mb-5">
                {optionList &&
                  optionList.length > 0 &&
                  optionList.map((item) => (
                    <label
                      className="option-checkbox flex align-items-center mr-5 ml-5"
                      htmlFor={item.id}
                      key={item.id}
                    >
                      <input
                        type="checkbox"
                        id={item.id}
                        name="itemList"
                        defaultValue={item.id}
                        defaultChecked={item?.checked ? true : false}
                        onChange={(e) => handleCheckbox(e,item.id)}
                      />
                      <span>{item.name}</span>
                      <div className="read-option-price mr-5">
                        <span>{item.price.toLocaleString('ko-KR')}원</span>
                      </div>
                    </label>
                  ))}
              </div>
            </>
          )}
          {/* <!-- [하단] 변경하기 --> */}
          <div className="change-btn-border">
            <button className="change-btn white" type="submit">
              변경하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductOption;
