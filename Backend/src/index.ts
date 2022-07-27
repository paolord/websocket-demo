// @ts-ignore
import http from 'http';
import { WebSocketServer } from 'ws';

import { createClient } from 'redis';
const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));

(async function() {
  await client.connect();
})();

const server = http.createServer();
const ws = new WebSocketServer({
  server
});
server.listen(5000, '0.0.0.0');

const rooms = {};

ws.on('connection', (conn) => {
  conn.on('message', async (msg) => {
    console.log(JSON.parse(msg));
    await client.rPush('data', msg);
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
