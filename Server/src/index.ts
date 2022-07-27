
const rooms = {};


function newRoomId(){
  let newRandomId = Math.floor(Math.random() * (9999 - 1000) + 1000);
  while (typeof rooms[newRandomId] !== 'undefined') {
    newRandomId = Math.floor(Math.random() * (9999 - 1000) + 1000);
  }
  rooms[newRandomId] = {};
  return newRandomId;
}