let stompClient = null;

// 주문수신 웹소켓 통신 연결
function connect() {
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
        console.log("Connected");

        // 주문 수신
        stompClient.subscribe('/orders', function (messageOutput) {
            const order = JSON.parse(messageOutput.body);
            console.log("주문 수신")
            showOrders(order);
            updateOrderCount();
        });

    });

}

function showOrders(order) {
    const orderMessages = document.getElementById('side-order-list');
    const messageElement = document.createElement('div');
    messageElement.classList.add('msg-box');
    messageElement.innerHTML = `
    <div class="sidebar-list">
        <ul class="order-list">
            <div class="order-container">
                <li class="order-title"><a href="#"></a></li>
                <li class="order-icon"><a href="#">주</a></li>
            </div>
            <div class="order-container">
                <li class="order-menu"><a href="#">${order.title}</a></li>
                <li class="order-price"><a href="#">${order.totalPrice}원</a></li>
            </div>
            <button class="complete-btn"><a href="#">주문</a></button>
        </ul>
    </div>
    `
    orderMessages.appendChild(messageElement);
    orderMessages.scrollTop = orderMessages.scrollHeight;
    playAlarm();
}

function orderWebSocketBinding(params) {
    document.getElementById('order-send').addEventListener('click', sendOrder);
}
connect();

// 주문 전송
function sendMessage(ordersId) {
    console.log("주문 전송 : " + ordersId)
    let data = {
        id : ordersId
    }
    if (stompClient) {
        stompClient.send("/app/order.addorder/" + ordersId,{},JSON.stringify(data));
    }
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

// 영업시작 / 종료
function systemStatus(status) {
    const url = "/setting"
    const data = {
        status: status
    }
    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(data)
    }).then(response => {
        let data = response.json()
        if (response.ok) {
            data.then(data => {
                console.log(data.text)
                location.reload()
            })
        }
    })
}

// 🔔 알람 소리 재생
function playAlarm() {
    console.log("알림음 재생!")
    const alarmSound = document.getElementById('alarm-sound');
    alarmSound.play();
}