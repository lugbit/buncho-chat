import React from "react";

const NameInput = ({ setName }) => {
  return (
    <div>
      <div className="name-input">
        <input
          onChange={(e) => {
            setName(e.target.value == "" ? "Anon" : e.target.value);
          }}
          placeholder="Set Nickname"
        />
      </div>
    </div>
  );
};

export default NameInput;
