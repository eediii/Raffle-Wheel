const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 'public' klasöründeki dosyaları insanlara göster
app.use(express.static(path.join(__dirname, 'public')));

// Katılımcı listesi (Geçici hafıza)
let participants = [];

io.on('connection', (socket) => {
    // Biri bağlandığında ona mevcut listeyi gönder
    socket.emit('updateList', participants);

    // Telefondan yeni isim gelirse
    socket.on('newParticipant', (name) => {
        participants.push(name);
        // Herkese (özellikle senin ekranına) yeni listeyi duyur
        io.emit('updateList', participants);
    });
});

// Sunucuyu başlat
server.listen(3000, () => {
    console.log('Sunucu calisiyor kanka! http://localhost:3000');
});