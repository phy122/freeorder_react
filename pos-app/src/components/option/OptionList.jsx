import React from 'react';
import styles from './Option.module.css';
import { Link } from 'react-router-dom';

const OptionList = ({ optionList }) => {
  return (
    <div className={styles['i-container']}>
      <div className={styles['opt-header']}>
        <h2>옵션 관리</h2>
        <Link to='/options/insert'>
          <button>
            <span className={styles['material-symbols-outlined']}>add_circle</span>
            <span>추가</span>
          </button>
        </Link>
      </div>
      <div className={styles['opt-item-list']}>
        {optionList && optionList.length > 0 ? (
          optionList.map((option) => (
            <div key={option.id} className={styles['opt-item-container']}>
              <div className={styles['opt-title']}>
                <a href={`/options/update/${option.id}`}>{option.name}</a>
              </div>
              <div className={styles['opt-i-list']}>
                {option.itemList && option.itemList.length > 0 ? (
                  option.itemList.map((item) => (
                    <div key={item.id} className={styles['opt-item']}>
                      {item.name}
                    </div>
                  ))
                ) : (
                  <p>아이템 없음</p>
                )}
              </div>
              <div className={styles['opt-list-right']}>
                <a
                  className={styles['material-symbols-outlined']}
                  href={`/options/update/${option.id}`}
                >
                  edit
                </a>
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
