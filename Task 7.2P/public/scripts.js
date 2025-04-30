const socket = io();

socket.on('number', (msg) => {
    console.log('Random number:', msg);
    document.getElementById('number').innerText = msg;
});

function sendMessage() {
    const input = document.getElementById('text');
    const msg = input.value.trim();
    if (msg) {
        socket.emit('message', msg);
        input.value = '';
    }
}

socket.on('message', (msg) => {
    const messagesDiv = document.getElementById('messages');
    const newMsg = document.createElement('li');
    newMsg.innerText = msg;
    messagesDiv.appendChild(newMsg);
});