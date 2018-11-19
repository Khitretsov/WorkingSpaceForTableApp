import './style.css';

let message = document.createElement('div');

message.innerHTML = 'В консоли сообщение';

document.body.appendChild(message);

console.log('Сообщение');