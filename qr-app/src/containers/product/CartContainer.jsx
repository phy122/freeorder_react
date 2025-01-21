import React, { useContext, useEffect, useState } from 'react'
import ProductCart from '../../components/product/ProductCart'
import * as carts from '../../apis/cart'
import { LoginContext } from '../../contexts/LoginContextProvider'
import * as Swal from '../../apis/alert'
import { useNavigate } from 'react-router-dom'
import ProductOption from '../../components/product/ProductOption'
const CartContainer = () => {

  const { usersId } = useContext(LoginContext)
  const navigator = useNavigate()

  const [totalPrice, setTotalPrice] = useState(0)
  const [cartList, setCartList] = useState([])
  const [cart, setCart] = useState(null)
  const [product, setProduct] = useState(null)
  const [optionList, setOptionList] = useState([])

  const [isModal, setIsModal] = useState(false)

  // 장바구니 조회
  const cartLoad = async () => {
    const response = await carts.list(usersId)
    const data = response.data
    const status = response.status
    if (status == 200) {
      setCartList(data)
      // console.dir(data)
      let total = 0
      data.map((item) => {
        total += item.price
      })
      setTotalPrice(total)
    }
  }

  // 옵션 변경창 열기
  const openModal = async (id) => {
    
    const response = await carts.selectOption(id)
    const data = response.data
    const status = response.status
    // console.log("전송받은 데이터");
    // console.dir(data)
    if (status == 200) {
      setCart(data.cart)
      setProduct(data.product)
      setOptionList(data.optionList)
      console.log("모달팝업");
      
      setIsModal(true)
    }
  }
  // 옵션 변경창 닫기
  const closeModal = () => {
    setIsModal(false)
  }

  // 옵션 변경하기
  const updateCart = async (cart) => {
    const response = await carts.update(cart,usersId)
    const data = response.data
    const status = response.status
    if (status == 200) {
      console.log(data);
      cartLoad()
      setIsModal(false)
    }
  }

  // 장바구니 개별 삭제
  const cartDelete = async (cartsId) => {
    Swal.confirm("삭제 하시겠습니까?", `해당 메뉴가 장바구니에서 삭제 됩니다.`, "warning", async () => {
      const response = await carts.remove(cartsId)
      const data = response.data
      const status = response.status
      if (status == 200) {
        cartLoad()
      }
    })
  }
  // 장바구니 전체 삭제
  const deleteAllCartItems = async () => {
    Swal.confirm("전체 삭제 하시겠습니까?", "장바구니에서 모든 메뉴를 삭제합니다.", "warning", async () => {
      const response = await carts.allRemove(usersId)
      const data = response.data
      const status = response.status
      if (status == 200) {
        Swal.alert("삭제되었습니다.", "장바구니가 비었습니다다.")
        cartLoad()
      }
    })  
  }

  // 결제페이지로 이동
  const menuPayment = () => {
    navigator(`/pay`)
  }


  useEffect(() => {
    cartLoad()
  }, [])
  return (
    <>
      <ProductCart
        totalPrice={totalPrice}
        cartList={cartList}
        openModal={openModal}
        closeModal={closeModal}
        cartDelete={cartDelete}
        deleteAllCartItems={deleteAllCartItems}
        menuPayment={menuPayment}
        
      />
      {/* <!-- 옵션변경 모달 --> */}
      <div id="option-modal" className={isModal?`open`:``}>
        <div className="modal-wrap">
          <div id="modal-body">
            <ProductOption
              cart={cart}
              product={product}
              optionList={optionList}
              updateCart={updateCart}
              isModal={isModal}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartContainer