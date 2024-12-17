// 설정 모달
$(function () {
    $(".settings-btn").on("click", function () {
        $("#modal").show(); // 모달 표시
    })

    $(".close-btn").on("click", function () {
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
    let formData = new FormData($("#cate-insert")[0])
    let url = "/pos/categories"
    $.ajax({
        url: url,
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "success") {
                alert("등록 성공")
                location.href = "/pos/category"
            }
        }
    })
}
// 카테고리 수정
function cateUpdate() {
    let formData = new FormData($("#cate-update")[0])
    let url = "/pos/categories"
    $.ajax({
        url: url,
        method: "put",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "success") {
                alert("수정 성공")
                location.href = "/pos/category"
            }
        }
    })
}
// 카테고리 삭제
function cateDelete() {
    let formData = new FormData($("#cate-update")[0])
    let url = "/pos/categories"
    $.ajax({
        url: url,
        method: "delete",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "success") {
                alert("삭제 성공")
                location.href = "/pos/category"
            }
        }
    })
}

// 상품 curd
// 상품 등록
function proInsert() {
    let formData = new FormData($("#pro-insert")[0])
    let url = "/pos/products"
    $.ajax({
        url: url,
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("상품 등록 성공")

                location.href = "/pos/product"
            }
        }
    })
}
// 상품 수정
function proUpdate() {
    let formData = new FormData($("#pro-update")[0])
    let url = "/pos/products"
    $.ajax({
        url: url,
        method: "put",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("상품 수정 성공")

                location.href = "/pos/product"
            }
        }
    })
}
// 상품 삭제
function proDelete() {
    let formData = new FormData($("#pro-update")[0])
    let url = "/pos/products"
    $.ajax({
        url: url,
        method: "delete",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("삭제 성공")
                location.href = "/pos/product"
            }
        }
    })
}

// 공지사항 등록
function noticeInsert() {
    let formData = new FormData($("#notice-insert")[0])
    let url = "/pos/notices"
    $.ajax({
        url: url,
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("등록 성공")
                location.href = "/pos/notice"
            }
        }
    })
}

// 공지사항 수정
function noticeUpdate() {
    let formData = new FormData($("#notice-update")[0])
    let url = "/pos/notice"
    $.ajax({
        url: url,
        method: "put",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
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
function cartInsert(id, optionsId) {
    let itemList = new Array();
    $("input[name=itemList]").each(function () {
        let checked = $(this).is(":checked")
        itemList.push({
            "id": $(this).val(),
            "checked": checked
        })
    })
    let product = {
        id: id,
        quantity: 1,
        option: {
            id: optionsId,
            itemList: itemList
        }
    }
    console.log(product)
    let url = '/pos/carts'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then(data => {
        cartList()
    })
}

// 장바구니 목록 불러오기
async function cartList() {
    let url = '/pos/carts'
    const cartList = document.getElementById("cart-list")
    await fetch(url, {
        method: 'GET'
    })
        .then(Response => Response.json())
        .then(data => {
            cartList.innerHTML = ""
            data.forEach(cart => {
                let cartTag = document.createElement("li")
                let cartItem = `
                    <div class="cart-top">
                        <button class="cart-item-del-btn" data='${cart.id}'>X</button>
                        <span class="cart-menu">${cart.productName}</span>
                        <div class="btn-box">
                            <button class="quantity-minus">-</button>
                            <input type="text" class="cart-quantity" value="${cart.amount}">
                            <button class="quantity-plus">+</button>
                        </div>
                        <input type="hidden" class="cart-price" value="${cart.price}">
                        <span class="amount">${cart.price}원</span>
                    </div>
                `
                cartTag.innerHTML = cartItem
                let optionListTag = document.createElement("ul")
                if (cart.optionList != null) {
                    cart.optionList.forEach(item => {
                        let itemTag = document.createElement("li")
                        let itemContent = `
                            <span class="cart-option">ㄴ${item.name} : 
                                <i class="cart-option-price">${item.price}원</i>
                            </span>
                        `
                        itemTag.innerHTML = itemContent
                        optionListTag.appendChild(itemTag)
                    })
                }
                cartTag.appendChild(optionListTag)
                cartList.appendChild(cartTag)
            });
            calcCartPrice()
            document.querySelectorAll(".cart-item-del-btn").forEach((e) => {
                const id = e.getAttribute("data")
                e.addEventListener("click", () => {
                    cartDelete(id)
                })
            })
            document.querySelectorAll(".btn-box").forEach((e) => {
                let qunatityTag = e.querySelector(".cart-quantity")
                e.querySelector(".quantity-minus").addEventListener("click", () => {
                    let value = qunatityTag.value <= 1 ? 1 : Number(qunatityTag.value) - 1
                    qunatityTag.value = value
                    calcCartPrice()
                })
                e.querySelector(".quantity-plus").addEventListener("click", () => {
                    let value = qunatityTag.value > 99 ? 100 : Number(qunatityTag.value) + 1
                    qunatityTag.value = value
                    calcCartPrice()
                })
            })

        })
}
// 장바구니 총 금액 변경
function calcCartPrice() {
    const carts = document.querySelectorAll("#cart-list>li>div")
    let totalPrice = 0;
    carts.forEach((cart) => {
        let amount = Number(cart?.querySelector(".cart-quantity")?.value)
        let productPrice = Number(cart?.querySelector(".cart-price").value)
        console.log(productPrice)
        const itemList = cart?.querySelectorAll(".cart-option-price")
        itemList.forEach((optionPrice) => {
            productPrice += Number(optionPrice.innerText)
        })
        totalPrice += productPrice * amount
    })
    document.getElementById("cart-total-price").innerHTML = totalPrice
}

// 장바구니에서 상품 제거
function cartDelete(id) {
    let url = '/pos/carts/' + id
    if (confirm('삭제하시겠습니까?')) {
        $.ajax({
            url: url,
            type: 'delete',
            success: function (response) {
                if ($.trim(response) == 'SUCCESS') {
                    location.reload()
                }
            }
        })
    }
}

// 장바구니 상품 전체 제거
function clearCart() {
    if (!confirm("장바구니의 모든 항목을 삭제하시겠습니까?")) {
        return;
    }
    fetch('/pos/carts/deleteAll', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert("장바구니가 비워졌습니다!");
                location.reload();
            } else {
                alert("장바구니 삭제 중 오류가 발생했습니다.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("서버와 통신 중 문제가 발생했습니다.");
        });
}

// 옵션 CRUD
// 옵션 선택 목록
function selectOptions(target) {
    const itemListTag = document.getElementById("optionList")
    const optionsIdSet = document.getElementById("optionsId")
    const url = `/pos/options`
    target.style.display = "none"


    itemListTag.innerHTML = "" //옵션 리스트 불러오기전 초기화
    fetch(url, {
        method: 'get'
    }).then(Response => Response.json())
        .then(response => {
            let data = response
            // console.log(data)

            data.forEach((option, i) => {
                let optionTag = document.createElement("li") // 새로운 태그 생성
                let content = `<span class="opt-title">${option.name}</span>` // 태그 내용
                optionTag.setAttribute("class", "opt-list") // 태그 클래스 설정
                optionTag.setAttribute("data", option.id) // 태그 클래스 설정
                optionTag.innerHTML = content // 태그에 내용 삽입

                // 옵션 아이템 목록 삽입
                option.itemList.forEach((item, i) => {
                    // console.log(item.name)
                    let itemTag = document.createElement("i")
                    itemTag.setAttribute("class", "text-icon")
                    itemTag.innerText = item.name
                    optionTag.append(itemTag)
                })
                itemListTag.appendChild(optionTag) // 옵션 항목 추가
                //   console.log(option.id)
            })
            // 추가된 옵션리스트 호출
            const options = document.querySelectorAll(".opt-list")
            options.forEach(element => {
                element.addEventListener("click", () => {
                    // 기존에 active 클래스를 참조
                    let activeTarget = document.querySelector(".opt-list.active")
                    // 이미 active 클래스가 존재할경우 제거
                    if (activeTarget) {
                        activeTarget.classList.remove("active")
                        optionsIdSet.value = ""
                    }
                    if (activeTarget != element) {
                        // 현재 클릭한 태그에 active 클래스 추가
                        element.classList.add("active")
                        optionsIdSet.value = element.getAttribute("data")
                    }
                })
            });
        })
}

// 옵션 등록
function optInsert() {
    let formData = new FormData($("#opt-insert")[0])
    let url = "/pos/options"
    $.ajax({
        url: url,
        method: "post",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("등록 성공")
                location.href = "/pos/option"
            }
        }
    })
}

// 옵션 수정
function optUpdate() {
    let formData = new FormData($("#opt-update")[0])
    let url = "/pos/options"
    $.ajax({
        url: url,
        method: "put",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("수정 성공")
                location.href = "/pos/option"
            }
        }
    })
}
// 옵션 삭제
function optDelete() {
    let formData = new FormData($("#opt-update")[0])
    let url = "/pos/options"
    $.ajax({
        url: url,
        method: "delete",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            if ($.trim(data) == "SUCCESS") {
                alert("삭제 성공")
                location.href = "/pos/option"
            }
        }
    })
}

// 옵션 추가
let itemIndex = 0; // 전역 변수로 인덱스 관리
function addOptionItem() {
    const list = document.getElementById("opt-item-list");
    const div = document.createElement("div");
    const id = crypto.randomUUID(); // 브라우저에서 UUID 생성

    div.className = "opt-item";
    div.innerHTML = `
        <input type="hidden" name="itemList[${itemIndex}].id" value="${id}">
        <input type="text" name="itemList[${itemIndex}].name" placeholder="옵션명" required>
        <input type="number" name="itemList[${itemIndex}].price" placeholder="금액" required>
        <button type="button" class="remove-btn" onclick="removeOptionItem(this)">삭제</button>
    `;
    list.appendChild(div);
    itemIndex++;
}


// 옵션 삭제
function removeOptionItem(button) {
    const item = button.closest(".opt-item");
    item.remove();
}
// 옵션 목록 열기
function openOptionModal(id, optionsId) {
    if (optionsId == null || optionsId == "") {
        cartInsert(id, optionsId)
        return false
    }
    // 모달 창 열기
    document.getElementById('option-modal').style.display = 'flex';
    const optionList = document.getElementById("modal-option-list")
    // 옵션 데이터를 가져와서 모달 창에 표시
    fetch('/pos/options/product/' + id) // 옵션 데이터를 가져오는 API 엔드포인트
        .then(response => response.json())
        .then(data => {
            console.log("옵션그룹명 : " + data.name)

            if (optionList) {
                optionList.innerHTML = ''; // 기존 옵션 리스트 초기화
                data.itemList.forEach((item) => {
                    const optionDiv = document.createElement('li');
                    optionDiv.innerHTML = `
                        <label class="option-checkbox flex align-items-center mr-5 ml-5">
                            <input type="checkbox" id="${item.id}" name="itemList" value="${item.id}">
                            <span>${item.name}</span>
                            <div class="read-option-price mr-5">
                                <span>${item.price}원</span>
                            </div>
                        </label>
                    `;
                    optionList.appendChild(optionDiv);
                    document.getElementById("option-modal-product-id").value = id
                    document.getElementById("option-modal-options-id").value = optionsId
                });

            } else {
                console.error('checkbox-container 요소를 찾을 수 없습니다.');
            }
        })
        .catch(error => {
            console.error('옵션 데이터를 가져오는 중 오류 발생:', error);
        });
}
function addCartWithOption() {
    const id = document.getElementById("option-modal-product-id").value
    const optionsId = document.getElementById("option-modal-options-id").value
    cartInsert(id, optionsId)
    closeModalMapping()
}

// 모달 창 닫기
function closeModalMapping() {
    document.getElementById('option-modal').style.display = 'none';
}
