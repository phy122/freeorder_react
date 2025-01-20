import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import * as products from '../../apis/product'
import * as carts from '../../apis/cart'
import ProductInfoModal from '../../components/Modals/ProductInfoModal'
import { LoginContext } from '../../contexts/LoginContextProvider'
import * as Swal from '../../apis/alert'
import ListContainer from '../../containers/product/ListContainer'

const ProductListPage = () => {

  const { usersId } = useContext(LoginContext)

  const [cateList, setCateList] = useState([])
  const [proList, setProList] = useState([])
  const [noticeList, setNoticeList] = useState([])
  const [productInfo, setProductInfo] = useState(null)

  const [isVisible, setIsVisible] = useState(false)
  const [isRepeat, setIsRepeat] = useState(null)
  const [visibleAnime, setVisibleAnime] = useState(false)

  const [quantity, setQuantity] = useState(1)
  
  // ?파라미터=값 가져오는 방법
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const cate = query.get("cate")

  // 카테고리 목록 불러오기
  const cateLoad = async () => {
    const response = await products.cateList()
    const data = response.data
    const status = response.status
    if (status == 200) {
      setCateList(data)
    }
  }

  // 상품 목록 불러오기
  const productLoad = async () => {
    const response = await products.list(cate ?? `undefined`)
    const data = response.data
    const status = response.status
    if (status == 200) {
      setProList(data)
    }
  }

  // 프로모션 불러오기
  const noticeLoad = async () => {
    const response = await products.noticeList()
    const data = response.data
    const status = response.status
    if (status == 200) {
      setNoticeList(data)
    }
  }

  // 상품 정보 팝업하기
  const infoModalPopup = async (productsId) => {
    const response = await products.select(productsId)
    const data = response.data
    const status = response.status
    if (status == 200) {
      console.log(`상품정보 불러오기 성공`)
      setProductInfo(data)
      setIsVisible(true)
    }
  }

  // 모달 페이지 닫기
  const eventModalClose = () => {
    console.log(`모달 닫기`)
    setIsVisible(false)
  }

  // 상세정보에서 수량 변경
  // Plus [ + ]
  const quantityCount = (add) => {
    setQuantity(quantity + add)
  }

  // 장바구니에 담기 
  const addCart = async (formdata, headers) => {
    const response = await carts.insert(formdata, usersId)
    const data = response.data
    const status = response.status
    if (status == 200) {
      Swal.alert(`장바구니에 추가완료`,`장바구니에 메뉴가 추가되었습니다.`,"success")
      setIsVisible(false)
    }
  }

  // 페이지 생명주기시 설정
  useEffect(() => {
    cateLoad()
    productLoad()
    noticeLoad()
    return () => {}
  }, [cate])

  // isVisible 변경시 설정
  useEffect(() => {
    if (isVisible) {
      clearTimeout(isRepeat);
      setIsRepeat(null);
      setVisibleAnime(true);
      console.log(`상품 조회`)
    } else {
      setVisibleAnime(false);
    }
  }, [isVisible])

  return (
    <>
      <ListContainer 
        proList={proList}
        cateList={cateList}
        noticeList={noticeList}
        infoModalPopup={infoModalPopup}
        productInfo = {productInfo}
      />
      {/* <!-- 이벤트 모달 팝업(전체화면) --> */}
      <ProductInfoModal
        visibleAnime={visibleAnime}
        eventModalClose={eventModalClose}
        productInfo={productInfo}
        quantity={quantity}
        quantityCount = {quantityCount}
        addCart = {addCart}
      />
    </>
  )
}

export default ProductListPage