const websocket = new WebSocket('wss://durak.vit.ooo/ws/');

websocket.onopen = function() {
    console.log('Соединение установлено');
};

websocket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    displayData(data);
};

websocket.onerror = function(error) {
    console.error('Произошла ошибка:', error);
};

websocket.onclose = function(event) {
    if (event.wasClean) {
        console.log('Соединение закрыто чисто');
    } else {
        console.log('Соединение закрыто с ошибкой');
    }
    console.log('Код закрытия:', event.code, 'Причина закрытия:', event.reason);
};

function displayData(data) {
    const dataDisplay = document.getElementById('data-display');
    dataDisplay.innerHTML = JSON.stringify(data);
}

// Обновление интерфейса игры с учетом полученных данных
function updateGameUI(data) {
    // Ваш код для обновления интерфейса игры на основе данных
}

// Обработка полученных данных от WebSocket сервера
async function receiveGameData() {
    const websocket = new WebSocket('wss://durak.vit.ooo/ws/');
    websocket.onmessage = function(event) {
        const data = JSON.parse(event.data);
        console.log(data); // Вывод данных в консоль для отладки
        updateGameUI(data); // Обновление интерфейса игры
    };
}

receiveGameData(); // Вызов функции для начала получения данных