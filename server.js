
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  pingInterval: 1000
});
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connect', socket => {
  console.log(`connect ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`disconnect ${socket.id}`);
  });
});

server.listen(port, () => console.log(`server listening on port ${port}`));
