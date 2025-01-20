import React, { useState, useEffect } from 'react';
import styles from './Category.module.css';

const CategorySeqList = ({ cateList, setupSaveCategoryOrder }) => {
  const [categories, setCategories] = useState(cateList || []);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedCategories = [...categories];
    const [movedCategory] = updatedCategories.splice(draggedIndex, 1);
    updatedCategories.splice(index, 0, movedCategory);

    const reorderedCategories = updatedCategories.map((category, i) => ({
      ...category,
      seq: i + 1,
    }));

    setCategories(reorderedCategories); 
    setDraggedIndex(null); 
  };

  const handleSave = () => {
    setupSaveCategoryOrder(categories); 
  };

  useEffect(() => {
    setCategories(cateList); 
  }, [cateList]);

  return (
    <div className={styles["seq-container"]}>
      <div className={styles["seq-btn-container"]}>
        <a href="/">
          <button type="button" className={styles["seq-cancel-btn"]}>취소</button>
        </a>
        <button
          type="button"
          className={styles["seq-save-btn"]}
          id="seqSaveBtn"
          onClick={handleSave}
        >
          저장
        </button>
      </div>

      <div className={styles["seq-select-title"]}>
        <h3>카테고리를 끌어서 순서를 변경하세요.</h3>
      </div>

      <div className={styles["seq-category-list"]}>
        {categories && categories.length > 0 ? (
          categories.map((cate, index) => (
            <div
              key={cate.id}
              className={styles["seq-category-item"]}
              draggable="true"
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
            >
              <span
                className={styles["category-name"]}
                data-id={cate.id}
              >
                {cate.name}
              </span>
              <span className={styles["category-seq"]}>{cate.seq}</span>
            </div>
          ))
        ) : (
          <div>카테고리가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default CategorySeqList;
