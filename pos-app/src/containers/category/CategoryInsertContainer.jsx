import React from 'react'
import * as categories from '../../apis/category'
import CategoryInsert from '../../components/category/CategoryInsert'
import { useNavigate } from 'react-router-dom'

const CategoryInsertContainer = () => {

  const navigate = useNavigate()
  
  // 카테고리 등록 요청 이벤트 핸들러
  const cateInsert = async (formData, headers) => {
    try {
      const response = await categories.insert(formData, headers)
      console.log(`data : ${response.data}`);
      
      const data = await response.data
      console.log(data);
      alert('카테고리 등록 완료')

      // 카테고리 목록으로 이동
      navigate('/categories')
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
        <CategoryInsert
        cateInsert = {cateInsert}
        />
    </>
  )
}

export default CategoryInsertContainer