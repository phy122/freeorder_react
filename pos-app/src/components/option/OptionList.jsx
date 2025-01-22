import React from 'react';
import styles from './Option.module.css';
import { Link } from 'react-router-dom';

const OptionList = ({ optionList }) => {
  return (
    <div className={styles['i-container']}>
      {/* Header Section */}
      <div className={styles['opt-header']}>
        <h2>옵션 관리</h2>
        <Link to="/options/insert">
          <button className={styles['add-button']}>
            <span className='material-symbols-outlined'>add_circle</span>
            <span>추가</span>
          </button>
        </Link>
      </div>

      {/* Option List */}
      <div className={styles['opt-list']}>
        {optionList && optionList.length > 0 ? (
          optionList.map((option) => (
            <div key={option.id} className={styles['opt-item-container']}>
              {/* Option Title */}
              <div className={styles['opt-title']}>
                <Link to={`/options/update/${option.id}`}>{option.name}</Link>
              </div>

              <div className={styles['opt-i-pt']}>
                {/* Option Items */}
                <div className={styles['opt-i-list']}>
                  {option.itemList && option.itemList.length > 0 ? (
                    option.itemList.map((item) => (
                      <div key={item.id} className={styles['opt-item']}>
                        <span>{item.name}</span>
                      </div>
                    ))
                  ) : (
                    <p>아이템 없음</p>
                  )}
                </div>

                {/* Edit Button */}
                <div className={styles['opt-list-right']}>
                  <Link to={`/options/update/${option.id}`}>
                    <span className='material-symbols-outlined'>edit</span>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>옵션이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default OptionList;
