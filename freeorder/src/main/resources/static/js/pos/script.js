// 설정 모달
$(function() {
    $(".settings-btn").on("click", function() {
        $("#modal").show(); // 모달 표시
    })

    $(".close-btn").on("click", function() {
        $("#modal").hide(); // 모달 숨김
    })
})

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

// 공지사항 등록
function noticeInsert(){
    let formData = new FormData ( $("#notice-insert")[0] )
    let url = "/pos/notices"
    $.ajax({
        url             : url,
        method          : "post",
        data            : formData,
        contentType     :   false,
        processData     :   false,       
        success : function(data){
            if($.trim(data) == "SUCCESS"){
                alert("등록 성공")
                location.href = "/pos/notice"
            }
        }
    })
}

// 공지사항 수정
function noticeUpdate(){
    let formData = new FormData ( $("#notice-update")[0] )
    let url = "/pos/notice"
    $.ajax({
        url             : url,
        method          : "put",
        data            : formData,
        contentType     :   false,
        processData     :   false,       
        success : function(data){
            if($.trim(data) == "SUCCESS"){
                alert("수정 성공")
                location.href = "/pos/notice"
            }
        }
    })
}

// 카테고리 목록 슬라이드
function categorySlide() {
    // DOM 요소 선택
    const cateWrap = document.getElementById('cate-tab-menu'); // 카테고리 리스트
    const btnLeft = document.getElementById('cate-left-btn'); // 왼쪽 버튼
    const btnRight = document.getElementById('cate-right-btn'); // 오른쪽 버튼
    
    // 슬라이드 이동량 (1개 항목의 너비)
    const itemWidth = cateWrap.firstElementChild.offsetWidth;
    const slideAmount = itemWidth * 4; // 4개씩 이동
    // 왼쪽으로 이동
    btnLeft.addEventListener('click', () => {
        cateWrap.scrollBy({
            top: -slideAmount,
        });
    });
    
    // 오른쪽으로 이동
    btnRight.addEventListener('click', () => {
        cateWrap.scrollBy({
            top: slideAmount,
        });
    });
    
}

// 상품 장바구니에 추가
function cartInsert(id, name, price){
    let product = {
        id: id,
        name: name,
        price: price
    }
    let url = '/qr/carts'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(data=>{
        console.log(data)
        cartList()
    })
}
cartList()
function cartList(){
    let url = '/pos/carts'
    const cartList = document.getElementById("cart-list")
    fetch(url, {
        method: 'GET'
    }).then(Response => Response.json())
    .then(data => {
        cartList.innerHTML = ""
        data.forEach(cart => {
            let cartTag = document.createElement("li")
            let cartItem = `
                <button class="cancel">X</button>
                <span class="cart-menu">${cart.productName}</span>
                <div class="btn-box">
                    <button class="quantity-minus">-</button>
                    <input type="text" class="quantity" value="${cart.amount}">
                    <button class="quantity-plus">+</button>
                </div>
                <input type="hidden" class="price" value="${cart.price}">
                <span class="amount">${cart.price * cart.amount}</span>
            ` 
            cartTag.innerHTML = cartItem
            cartList.appendChild(cartTag)
        });

        document.querySelectorAll(".btn-box").forEach((e)=>{
            let qunatityTag = e.querySelector(".quantity")
            e.querySelector(".quantity-minus").addEventListener("click",() => {
                let value = qunatityTag.value <= 1? 1: Number(qunatityTag.value) - 1
                qunatityTag.value = value
            })
            e.querySelector(".quantity-plus").addEventListener("click",() => {
                let value = qunatityTag.value > 9 ? 10 : Number(qunatityTag.value) + 1
                qunatityTag.value = value
            })
        })
        
    })
}