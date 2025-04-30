const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    setInterval(() => {
        const randomNum = Math.floor(Math.random() * 100);
        socket.emit('number', randomNum);
    }, 1000);
});

http.listen(port, () => {
    console.log("App listening to: " + port)
});