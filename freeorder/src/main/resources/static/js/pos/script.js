/**
 * 헤더영역 
 * 
 * 영업시작 / 종료
 */

// 영업 시작

// 영업 종료


/**
 *          사이드바
 */

// 리스트갱신

// 주문수락

/**
 *  MODAL
 */

// 모달 열기

// 모달 닫기

// 매출관리 달력
salesFunctions()
function salesFunctions(params) {
    const calendarContainer = document.querySelector(".calendar");
    const calendarDates = document.getElementById("calendarDates");
    const monthYear = document.getElementById("monthYear");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // 월/연도 표시
        monthYear.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;

        // 해당 월의 첫날 요일과 총 일 수 계산
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // 기존 날짜 초기화
        calendarDates.innerHTML = "";

        // 첫 번째 주의 공백 추가
        for (let i = 0; i < firstDay; i++) {
            const blank = document.createElement("div");
            calendarDates.appendChild(blank);
        }

        // 날짜 추가
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement("div");
            dateElement.textContent = day;
            dateElement.addEventListener("click", () => {
                document.querySelectorAll("#calendarDates div").forEach(div => div.classList.remove("selected"));
                dateElement.classList.add("selected");
            });
            calendarDates.appendChild(dateElement);
        }
    }

    // 이전/다음 월 이동
    prevMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    // 초기 달력 렌더링
    renderCalendar(currentDate);

}