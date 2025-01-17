import React, { useContext, useEffect, useState } from 'react'
import ProductCart from '../../components/product/ProductCart'
import * as carts from '../../apis/cart'
import { LoginContext } from '../../contexts/LoginContextProvider'

const CartContainer = () => {

  const { usersId } = useContext(LoginContext)

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
      console.dir(data)
      let total = 0
      data.map(()=>{})
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
      />
    </>
  )
}

export default CartContainer