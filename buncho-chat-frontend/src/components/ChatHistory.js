import React from "react";
import Message from "./Message";
import NameInput from "./NameInput";

const ChatHistory = ({ chatHistoryArray, setName }) => {
  const messages = chatHistoryArray.map((msg) => (
    <Message message={msg.data} />
  ));
  return (
    <div className="chat-history">
      <NameInput setName={setName} />
      <h3 className="chat-history-title">Chat History</h3>

      <hr></hr>
      {messages}
    </div>
  );
};

export default ChatHistory;
