import React from 'react';
import { Link } from 'react-router-dom';
import ProductInfoModal from '../Modals/ProductInfoModal';

const ProductOption = ({ product, optionList, cart }) => {
  return (
    <div className="option-container">
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
        <form onsubmit="return false" id="cart-update">
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
                      for={item.id}
                    >
                      <input
                        type="checkbox"
                        id={item.id}
                        name="itemList"
                        value={item.id}
                        checked={item?.checked ? true : false}
                      />
                      <span>{item.name}</span>
                      <div className="read-option-price mr-5">
                        <span>
                          {item.price.toLocaleString('ko-KR')}원
                        </span>
                      </div>
                    </label>
                  ))}
              </div>
            </>
          )}
        </form>
      </div>

      {/* <!-- [하단] 변경하기 --> */}
      <div className="change-btn-border">
        <Link to="/cart">
          <button className="change-btn white" onClick="editCart()">
            변경하기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductOption;