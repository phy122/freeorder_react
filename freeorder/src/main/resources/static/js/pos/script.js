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
function salesFunctions() {
    const calendarDates = document.getElementById("calendarDates");
    const monthYear = document.getElementById("monthYear");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");

    let currentDate = new Date();
    let selectedDate = null; // 클릭한 날짜 저장

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

            // 클릭한 날짜와 비교하여 강조
            const isSelected =
                selectedDate &&
                selectedDate.getFullYear() === year &&
                selectedDate.getMonth() === month &&
                selectedDate.getDate() === day;

            if (isSelected) {
                dateElement.classList.add("selected");
            }

            // 날짜 클릭 이벤트
            dateElement.addEventListener("click", () => {
                selectedDate = new Date(year, month, day); // 선택한 날짜 저장
                renderCalendar(currentDate); // 달력 다시 렌더링
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


// 카테고리 CRUD

// 카테고리 등록
function cateInsert() {
    let formData = new FormData( $("#cate-insert")[0])
    let url = "/pos/categories"
    $.ajax({
        url             : url,
        method          : "post",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "success") {
                alert("등록 성공")
                location.href = "/pos/category"
            }
        }
    }) 
}
// 카테고리 수정
function cateUpdate() {
    let formData = new FormData( $("#cate-update")[0])
    let url = "/pos/categories"
    $.ajax({
        url             : url,
        method          : "put",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "success") {
                alert("수정 성공")
                location.href = "/pos/category"
            }
        }
    }) 
}
// 카테고리 삭제
function cateDelete() {
    let formData = new FormData( $("#cate-update")[0])
    let url = "/pos/categories"
    $.ajax({
        url             : url,
        method          : "delete",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "success") {
                alert("삭제 성공")
                location.href = "/pos/category"
            }
        }
    }) 
}

// 상품 curd
// 상품 등록
function proInsert(){
    let formData = new FormData( $("#pro-insert")[0] )
    let url = "/pos/products"
    $.ajax({
        url             : url,
        method          : "post",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "SUCCESS") {
                alert("상품 등록 성공")

                location.href = "/pos/product"
            }
        }              
    })
}
// 상품 수정
function proUpdate(){
    let formData = new FormData( $("#pro-update")[0] )
    let url = "/pos/products"
    $.ajax({
        url             : url,
        method          : "put",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "SUCCESS") {
                alert("상품 수정 성공")

                location.href = "/pos/product"
            }
        }
    })
}
// 상품 삭제
function proDelete() {
    let formData = new FormData( $("#pro-update")[0])
    let url = "/pos/products"
    $.ajax({
        url             : url,
        method          : "delete",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "SUCCESS") {
                alert("삭제 성공")
                location.href = "/pos/product"
            }
        }
    }) 
}
