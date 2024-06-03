var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
  console.log("Attempting connection...");
  socket.onopen = () => {
    console.log("Succesfully connected");
  }

  socket.onmessage = msg => {
    console.log("Socket closed connection: ", msg);
    cb(msg);
  }

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  }
}

let sendMsg = msg => {
    console.log("Sending message: ", msg);
    socket.send(msg);
}

export {connect, sendMsg};