import React, { useState, useEffect } from 'react';
import ProductUpdate from '../../components/product/ProductUpdate';
import * as products from '../../apis/product';  // 상품 API
import { useParams, useNavigate } from 'react-router-dom';

const ProductUpdateContainer = () => {
  const { id } = useParams();  // URL에서 id 추출
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    categoriesId: '',
    optionsId: '',
    productFile: null,
  })
  const [cateList, setCateList] = useState([])  // 카테고리 목록

  // 상품 정보 가져오기
  const getProductDetails = async () => {
    try {
      const response = await products.getById(id);  // 상품 상세 조회
      setProduct(response.data);  // 상품 정보 설정
    } catch (error) {
      console.error("상품을 불러오는 데 실패했습니다.", error)
    }
  }

  // 카테고리 목록 가져오기
  const getCategories = async () => {
    try {
      const response = await products.getCategories();  // 카테고리 목록 조회 API
      setCateList(response.data);  // 카테고리 목록 설정
    } catch (error) {
      console.error("카테고리를 불러오는 데 실패했습니다.", error)
    }
  }

  useEffect(() => {
    getProductDetails()
    getCategories()
  }, [id]);  // id가 변경될 때마다 다시 불러오기

  // 상품 삭제 처리 함수
  const handleDelete = async () => {
    try {
      const response = await products.remove(id);  // remove 함수 호출
      console.log("상품 삭제 성공:", response.data)
      if(confirm("정말로 상품을 삭제하시겠습니까?")){
        navigate('/products/updateList')  // 삭제 후 목록 페이지로 리다이렉트
      }
    } catch (error) {
      console.error("상품 삭제 실패:", error)
    }
  };

  return (
    <ProductUpdate
      product={product}
      cateList={cateList}
      setProduct={setProduct}
      handleDelete={handleDelete}  // 삭제 함수 전달
    />
  );
};

export default ProductUpdateContainer;
