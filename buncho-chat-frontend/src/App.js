import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ChatHome from "./pages/ChatHome";
import { connect, sendMsg, color } from "./websocket/websocket";

function App() {
  const [chatHistory, setChatHistory] = useState([]); // chat history array
  const [name, setName] = useState("Anon"); // user name

  // send message function
  const send = (event) => {
    if (event.keyCode == 13) {
      // 13 = enter
      // generate timestamp
      var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      //send message to websocket
      sendMsg(event.target.value, name, time, color);
      event.target.value = "";
    }
  };

  // retrieve new messages and append to chat history array
  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory([...chatHistory, msg]);
    });
  });

  return (
    <div className="App">
      <ChatHome
        chatHistoryArray={chatHistory}
        send={send}
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default App;
