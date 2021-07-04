import React from "react";

const Message = ({ message }) => {
  let temp = JSON.parse(message);
  const msg = temp;
  return (
    <div className="message">
      <p>
        <b style={{ color: msg.color }}>{msg.user}</b>: {msg.message}
        <div className="timestamp">{msg.timestamp}</div>
      </p>
    </div>
  );
};

export default Message;
