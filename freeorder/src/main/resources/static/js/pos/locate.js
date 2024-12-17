function locateFunction() {
    const list = document.querySelector('.l-product-list');
    if (!list) {
        console.error("요소를 찾을 수 없습니다.");
        return; // 요소가 없으면 함수를 종료
    }

    let currentItemIndex = null;
    let currentItem = null;

    // 드래그 시작
    list.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('l-product-card')) {
            currentItem = e.target;
            const listArr = [...currentItem.parentElement.children];
            currentItemIndex = listArr.indexOf(currentItem);
        }
    });

    // l-product-list 영역 내에서만 드래그오버 허용
    list.addEventListener('dragover', (e) => {
        e.preventDefault(); // 드래그 오버가 l-product-list 안에서만 작동하도록 허용
    });

    // 드롭 처리
    list.addEventListener('drop', (e) => {
        e.preventDefault();

        // 드롭 대상 확인
        const currentDropItem = e.target.closest('.l-product-card');
        if (currentDropItem && currentItem !== currentDropItem) {
            const listArr = [...currentItem.parentElement.children];
            const dropItemIndex = listArr.indexOf(currentDropItem);

            // 현재 아이템을 대상 앞이나 뒤로 위치 변경
            if (currentItemIndex < dropItemIndex) {
                currentDropItem.after(currentItem);
            } else {
                currentDropItem.before(currentItem);
            }
        }
    });
}

// 드롭 방지 함수 (이미지나 l-product-list 외에는 드롭을 막음)
function preventDrop(e) {
    e.preventDefault();
    e.stopPropagation();
}

function setupSaveProductOrder() {
    const saveBtn = document.getElementById('saveBtn');

    if (!saveBtn) {
        console.error("'saveBtn' 요소를 찾을 수 없습니다. HTML 구조를 확인하세요.");
        return;
    }

    saveBtn.addEventListener('click', () => {
        const productList = [];
        const productCards = document.querySelectorAll('.l-product-card');

        productCards.forEach((card, index) => {
            const productId = card.querySelector('.product-name').getAttribute('data-id'); // 상품 ID
            const productName = card.querySelector('.product-name').innerText; // 상품명
            const productPrice = card.querySelector('.product-price').innerText; // 가격

            productList.push({
                id: productId,
                seq: index + 1 // 순서 번호를 1부터 시작하도록 수정
            });
        });

        // AJAX로 상품 순서 저장 요청
        fetch('/pos/products/locate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productList)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // 서버 응답을 JSON으로 처리
            })
            .then(result => {
                if (result.status === "SUCCESS") {
                    alert(result.message || '저장이 완료되었습니다.');
                    location.href = "/pos/product"; // 수정 성공 후 페이지 이동
                } else {
                    alert(result.message || '저장에 실패했습니다.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('서버와 통신 중 오류가 발생했습니다.');
            });
    });
}