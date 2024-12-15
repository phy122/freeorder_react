let stompClient = null;
let userId = `[[${userId}]]`
let orderId = `[[${orderId}]]`

// 주문수신 웹소켓 통신 연결
function connect() {
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
        console.log("Connected");

        // 주문 수신
        stompClient.subscribe('/orders/' + orderId, function (messageOutput) {
            const message = JSON.parse(messageOutput.body);
            showOrders(message);
            if (message.type === 'ORDER' || message.type === 'CANCEL') {
                updateOrderCount();
            }
        });

        // 사용자 입장 주문 결제시 전송
        const orderMessage = {
            userId: userId,
            orderId: orderId
        };
        msg = JSON.stringify(orderMessage)
        stompClient.send("/app/order.addorder/" + orderId, {}, msg);
    });

}

function showOrders(message) {
    const orderMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('msg-box');
    if (message.userId === userId) messageElement.classList.add('me');
    messageElement.innerHTML = `<div class="sidebar-list">
        <ul class="order-list">
            <div class="order-container">
                <li class="order-title"><a href="#"></a></li>
                <li class="order-icon"><a href="#">주</a></li>
            </div>
            <div class="order-container">
                <li class="order-menu"><a href="#">닭볶음탕 외 1개 주문</a></li>
                <li class="order-price"><a href="#">36,000원</a></li>
            </div>
            <button class="complete-btn"><a href="#">주문</a></button>
        </ul>
    </div>`
    orderMessages.appendChild(messageElement);
    orderMessages.scrollTop = orderMessages.scrollHeight;
}


document.getElementById('order-send').addEventListener('click', sendOrder);
connect();


// 환불 요청
function deleteOrder() {
    fetch(`/orders/${orderId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('주문이 삭제되었습니다.');
            window.location.href = '/';
        } else {
            alert('주문 삭제에 실패하였습니다.');
        }
    });
}

// 주문 수 업데이트
function updateOrderCount() {

    fetch(`/orders/orderCount`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("order-alarm").display = 'flex'
            document.getElementById('user-count').innerText = data.orderCount;
        });
}