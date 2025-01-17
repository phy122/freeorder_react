import React from 'react';
import styles from './Category.module.css';

const CategorySeqList = ({ cateList, setupSaveCategoryOrder }) => {
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
          onClick={setupSaveCategoryOrder}
        >
          저장
        </button>
      </div>

      <div className={styles["seq-select-title"]}>
        <h3>카테고리를 끌어서 순서를 변경하세요.</h3>
      </div>

      <div className={styles["seq-category-list"]}>
        {cateList && cateList.length > 0 ? (
          cateList.map((cate) => (
            <div
              key={cate.id}
              className={styles["seq-category-item"]}
              draggable="true"
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
