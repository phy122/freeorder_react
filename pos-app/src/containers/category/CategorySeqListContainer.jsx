import React, { useEffect, useState } from 'react';
import * as categories from '../../apis/category'; 
import CategorySeqList from '../../components/category/CategorySeqList';
import { useNavigate } from 'react-router-dom'

const CategorySeqListContainer = () => {

  const navigate = useNavigate()
  const [cateList, setCateList] = useState([]);

  // 카테고리 목록 불러오기
  const cateLoad = async () => {
    try {
      const response = await categories.list();
      const data = response.data;
      if (response.status === 200) {
        setCateList(data);
      }
    } catch (error) {
      console.error('카테고리 로드 오류:', error);
      alert('카테고리 데이터를 불러오는 중 오류가 발생했습니다.');
    }
  };

  // 카테고리 순서 저장
  const setupSaveCategoryOrder = async (reorderedCategories) => {
    try {
      const response = await categories.seqUpdate(reorderedCategories);
      if (response.status === 200) {
        alert('순서 저장이 완료되었습니다.');
        navigate('/')
        // 카테고리 목록 다시 불러오기
        cateLoad();
      }
    } catch (error) {
      console.error('순서 저장 오류:', error);
      alert('순서를 저장하는 중 오류가 발생했습니다.');
    }
  };

  // 컴포넌트가 처음 렌더링될 때 카테고리 목록 불러오기
  useEffect(() => {
    cateLoad();
  }, []);

  return (
    <>
      <CategorySeqList
        cateList={cateList}
        setupSaveCategoryOrder={setupSaveCategoryOrder}
      />
    </>
  );
};

export default CategorySeqListContainer;
