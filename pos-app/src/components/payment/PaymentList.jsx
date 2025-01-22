import React from 'react'
import styles from './Payment.module.css'

const PaymentList = ({ payList }) => {
  return (
    <>
      <div className={styles['ls-container']}>
        <div className={styles['ls-left-container']}>
          <div className={styles['ls-back-title']}>
            <div className={styles['ls-payment-title']}>
              <a href="">
                <span className='material-symbols-outlined'>close</span>
              </a>
              <h3>결제 내역</h3>
            </div>
          </div>
          <form action="" method="get">
            <div className={styles['ls-filter-part']}>
              <div>
                <select name="date">
                  <option value="1" th:selected="${paySearch.date == 1}">오늘</option>
                  <option value="7" th:selected="${paySearch.date == 7}">1주</option>
                  <option value="30" th:selected="${paySearch.date == 30}">1달</option>
                  <option value="365" th:selected="${paySearch.date == 365}">1년</option>
                </select>
                <select name="paymentMethods">
                  <option value="현금" th:selected="|${paySearch.paymentMethods == '현금'}|">현금</option>
                  <option value="카드" th:selected="|${paySearch.paymentMethods == '카드'}|">카드</option>
                </select>
              </div>
              <div className={styles['ls-input-filter']}>
                <input type="text" name="minPrice" th:value="${paySearch.minPrice != null ? paySearch.minPrice : ''}" placeholder="최소금액" />
                <input type="text" name="maxPrice" th:value="${paySearch.maxPrice != null ? paySearch.maxPrice : ''}" placeholder="최대금액" />
                <button type="submit" className={styles['ls-read-btn']} id="search-payment-btn">조회</button>
              </div>
            </div>
          </form>

          <ul className={styles['ls-list-part']}>
            {
              payList.map((payment) => (
                <li>
                  <div className={styles['ls-time']}>
                    <p th:text="${#dates.format(payment.paidAt,'EEEE')}">금요일</p>
                    <p th:text="${#dates.format(payment.paidAt,'yyyy-MM-dd')}">2024.11.29</p>
                  </div>
                  <a className={styles['ls-detail-link']} th:onclick="paymentRead([[${payment.id}]])">
                    <div className={styles['ls-payment']}>
                      <p th:text="${payment.paymentMethod}">카드</p>
                    </div>
                    <div className={styles['ls-simple']}>
                      <h3 th:text="${#numbers.formatInteger(payment.order.totalPrice, 3, 'COMMA') + '원'}"></h3>
                      <h5 th:text="${payment.order.title}"></h5>
                    </div>
                    <div className={styles['ls-table']}>
                      <h5 th:text="${#dates.format(payment.paidAt,'hh:mm')}">11:04</h5>
                      <h6 th:text="|주문번호 : ${payment.order.orderNumber}|">주문번호 1</h6>
                    </div>
                  </a>
                </li>
              ))
            }
            {
              payList == null ??
              <li>
                <span>결제 내역이 없습니다.</span>
              </li>
            }
          </ul>

        </div>
        <div className={styles['ls-right-container']} id="right-payment-info">

        </div>
      </div>
    </>
  )
}

export default PaymentList