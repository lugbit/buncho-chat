import React from "react";
import ChatHistory from "../components/ChatHistory";
import ChatInput from "../components/ChatInput";
import Header from "../components/Header";

const ChatHome = ({ chatHistoryArray, send, name, setName }) => {
  return (
    <div className="chat-page">
      <Header />
      <ChatHistory chatHistoryArray={chatHistoryArray} setName={setName} />
      <ChatInput send={send} />
    </div>
  );
};

export default ChatHome;
