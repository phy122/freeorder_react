import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as categories from '../../apis/category';
import CategoryUpdate from '../../components/category/CategoryUpdate';

const CategoryUpdateContainer = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const navigate = useNavigate();

  const [category, setCategory] = useState(null); // 카테고리 데이터 상태

  // 카테고리 데이터 가져오기
  const fetchCategory = async () => {
    try {
      const response = await categories.list(); // 목록 조회
      const foundCategory = response.data.find((item) => item.id === id); // id로 카테고리 찾기
      setCategory(foundCategory);
    } catch (error) {
      console.error('카테고리 불러오기 실패:', error);
      alert('카테고리를 불러오는 중 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);

  // 카테고리 수정 요청
  const cateUpdate = async (updatedData) => {
    try {
      await categories.update(updatedData, { 'Content-Type': 'application/json' });
      alert('카테고리 수정 완료');
      navigate('/categories'); // 수정 후 목록 페이지로 이동
    } catch (error) {
      console.error('카테고리 수정 실패:', error);
      alert('카테고리 수정 중 오류가 발생했습니다.');
    }
  };

  // 카테고리 삭제 요청
  const cateDelete = async () => {
    try {
      await categories.remove(id); // 삭제 요청
      alert('카테고리 삭제 완료');
      navigate('/categories'); // 삭제 후 목록 페이지로 이동
    } catch (error) {
      console.error('카테고리 삭제 실패:', error);
      alert('카테고리 삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {category && (
        <CategoryUpdate
          category={category}
          cateUpdate={cateUpdate}
          cateDelete={cateDelete}
        />
      )}
    </>
  );
};

export default CategoryUpdateContainer;
