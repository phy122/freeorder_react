import React, { useContext, useEffect, useState } from 'react'
import ProductCart from '../../components/Product/ProductCart'
import * as carts from '../../apis/cart'
import { LoginContext } from '../../contexts/LoginContextProvider'
import * as Swal from '../../apis/alert'
import { useNavigate } from 'react-router-dom'
const CartContainer = () => {

  const { usersId } = useContext(LoginContext)
  const navigator = useNavigate()

  const [totalPrice, setTotalPrice] = useState(0)
  const [cartList, setCartList] = useState([])

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
    const response = await carts.select(id)
    const data = response.data
    const status = response.status
    if (status == 200) {
      setIsModal(true)
    }
  }
  // 옵션 변경창 닫기
  const closeModal = () => {
    setIsModal(false)
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
    </>
  )
}

export default CartContainer