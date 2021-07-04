import React from "react";

const ChatInput = ({ send }) => {
  return (
    <div className="chat-input">
      <input onKeyDown={send} placeholder="Say something..." />
    </div>
  );
};

export default ChatInput;
