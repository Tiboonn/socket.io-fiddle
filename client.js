
const socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', () => {
  console.log(`connect ${socket.id}`);
});

socket.on('disconnect', () => {
  console.log(`disconnect ${socket.id}`);
});

socket.on('pong', (ms) => {
  console.log(ms);
});
