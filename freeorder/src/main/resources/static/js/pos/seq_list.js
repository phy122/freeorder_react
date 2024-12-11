function seqListFunction() {
    const list = document.querySelector('.seq-category-list');
    let currentItemIndex = null;
    let currentItem = null;

    // 드래그 시작
    list.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('seq-category-item')) {
            currentItem = e.target;
            const listArr = [...currentItem.parentElement.children];
            currentItemIndex = listArr.indexOf(currentItem);
        }
    });

    // l-product-list 영역 내에서만 드래그오버 허용
    list.addEventListener('dragover', (e) => {
        e.preventDefault();  // 드래그 오버가 l-product-list 안에서만 작동하도록 허용
    });

    // 드롭 처리
    list.addEventListener('drop', (e) => {
        e.preventDefault();

        // 드롭 대상 확인
        const currentDropItem = e.target.closest('.seq-category-item');
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