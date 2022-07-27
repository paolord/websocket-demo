// @ts-ignore
import http from 'http';
import { WebSocketServer } from 'ws';


const server = http.createServer();
const ws = new WebSocketServer({
  server
});
server.listen(5000, '0.0.0.0');

const rooms = {};

ws.on('connection', (conn) => {
  conn.on('message', () => {
    
  });
});

function newRoomId(){
  let newRandomId = Math.floor(Math.random() * (9999 - 1000) + 1000);
  while (typeof rooms[newRandomId] !== 'undefined') {
    newRandomId = Math.floor(Math.random() * (9999 - 1000) + 1000);
  }
  rooms[newRandomId] = {};
  return newRandomId;
}