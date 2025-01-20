import React, { useEffect, useState } from 'react'
import Productlocate from '../../components/product/Productlocate'
import * as products from '../../apis/product'; 
import { useNavigate } from 'react-router-dom'

const ProductlocateContainer = () => {

  const navigate = useNavigate()
  const [proList, setProList] = useState([])

  const proLoad = async () => {
    try {
      const response = await products.list();
      const data = response.data
      if(response.status === 200){
        setProList(data)
      }
    } catch (error) {
      console.error('상품 로드 오류 : ', error)
      alert('상품 데이터를 불러오는 중 오류가 발생했습니다.');
    }
  }

  const setupSaveProductOrder = async (reorderedProducts) => {
    try {
      const response = await products.locate(reorderedProducts)
      if(response.status === 200){
        alert('순서 저장이 완료되었습니다.')
        navigate('/')
        proLoad()
      }
    } catch (error) {
      console.error('순서 저장 오류 : ', error)
      alert('순서를 저장하는 중 오류가 발생했습니다.');
    }
  }

  useEffect(() => {
    proLoad();
  }, [])
  
  return (
    <>
    <Productlocate 
      proList={proList}
      setupSaveProductOrder={setupSaveProductOrder}
    />
    </>
  )
}

export default ProductlocateContainer