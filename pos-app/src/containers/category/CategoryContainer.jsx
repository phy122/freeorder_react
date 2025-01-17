import React, { useEffect, useState } from 'react'
import CategoryList from '../../components/category/CategoryList'
import * as categories from '../../apis/category'

const CategoryContainer = () => {
  
  const [cateList, setCateList] = useState([])

  // 카테고리 목록 불러오기
  const cateLoad = async () => {
    try {
      const response = await categories.list()
      const data = response.data
      const status = response.status
      if(status == 200){
        setCateList(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    cateLoad()
    return () => {}
  }, [])
  
  
  return (
    <>
      <CategoryList
      cateList={cateList}
      />
    </>
  )
}

export default CategoryContainer