import React from 'react'
import './Sale.css'

const Sale = () => {
    return (
        <div className="sales">
            <a href="#" className="today-date" id="selectedDate">2024.12.06</a>

            <div className="sales-sr">
                <div className="sr-sr">
                    <div className="sr-sales">
                        <a href="#" className="sr-title">이번 달 실 매출</a>
                        <a href="#" className="sales-price" id="totalSales">로딩 중...</a>
                    </div>
                    <div className="sr-refund">
                        <a href="#" className="sr-title">이번 달 총 환불</a>
                        <a href="#" className="refund-price" id="totalRefund">로딩 중...</a>
                    </div>
                </div>
                <div className="calendar">
                    <div className="calendar-header">
                        <button id="prevMonth">◀</button>
                        <span id="monthYear"></span>
                        <button id="nextMonth">▶</button>
                    </div>
                    <div className="calendar-days">
                        <div>월</div>
                        <div>화</div>
                        <div>수</div>
                        <div>목</div>
                        <div>금</div>
                        <div>토</div>
                        <div>일</div>
                    </div>
                    <div id="calendarDates"></div>
                </div>
            </div>

            <div id="dailySales"></div>
        </div>
    )
}

export default Sale