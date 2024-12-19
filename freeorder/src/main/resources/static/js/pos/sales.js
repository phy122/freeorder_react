function salesFunctions() {
    const calendarDates = document.getElementById("calendarDates");
    const monthYear = document.getElementById("monthYear");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    const totalSalesElement = document.getElementById("totalSales");
    const totalRefundElement = document.getElementById("totalRefund");

    let currentDate = new Date();

    async function fetchTotalMonthSales() {
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
        try {
            const response = await fetch(`/sales/totalMonthSales?day=${formattedDate}`);
            if (!response.ok) throw new Error("서버 응답 오류");
            const data = await response.json();
            totalSalesElement.textContent = `${data.totalSales || 0}원`;
            totalRefundElement.textContent = `${data.totalCount || 0}건`;
        } catch (error) {
            console.error("이번 달 매출 조회 오류:", error);
            totalSalesElement.textContent = "매출 정보를 불러올 수 없습니다.";
            totalRefundElement.textContent = "환불 정보를 불러올 수 없습니다.";
        }
    }

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        monthYear.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarDates.innerHTML = "";

        for (let i = 0; i < firstDay; i++) {
            const blank = document.createElement("div");
            calendarDates.appendChild(blank);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateContainer = document.createElement("div");
            dateContainer.classList.add("date-container");

            const dateElement = document.createElement("div");
            dateElement.textContent = day;
            dateElement.classList.add("calendar-day");

            const salesInfoDiv = document.createElement("div");
            salesInfoDiv.id = `salesInfo_${day}`;
            salesInfoDiv.classList.add("sales-info");
            salesInfoDiv.textContent = "로딩 중...";

            dateContainer.appendChild(dateElement);
            dateContainer.appendChild(salesInfoDiv);
            calendarDates.appendChild(dateContainer);

            fetchSalesData(year, month + 1, day, salesInfoDiv);
        }
    }

    async function fetchSalesData(year, month, day, salesInfoDiv) {
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        try {
            const response = await fetch(`/sales/dailySales?day=${formattedDate}`);
            if (!response.ok) throw new Error("서버 응답 오류");
            const data = await response.json();
            salesInfoDiv.textContent = `${data.totalSales || 0}원`;
        } catch (error) {
            console.error(`${formattedDate}의 매출 정보 조회 오류:`, error);
            salesInfoDiv.textContent = "불러오기 실패";
        }
    }

    prevMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
        fetchTotalMonthSales();
    });

    nextMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
        fetchTotalMonthSales();
    });

    renderCalendar(currentDate);
    fetchTotalMonthSales();
}
