// web socket server URL
var socket = new WebSocket("ws://localhost:8080/websocket");

// random colour generator for user names
const random_hex_color_code = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};
let color = "#000000";

let connect = (cb) => {
  console.log("Connecting...");

  socket.onopen = () => {
    // on socket connection, generate a colour for the username
    color = random_hex_color_code();
    console.log("Successfully Connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };
};

// send message to websocket connection passing in the message, username, timestamp and user name colour
let sendMsg = (msg, user, timestamp, color) => {
  console.log("Sending msg: ", msg);
  if (msg != "") {
    socket.send(
      JSON.stringify({
        message: msg,
        user: user,
        timestamp: timestamp,
        color: color,
      })
    );
  }
};

export { connect, sendMsg, color };
