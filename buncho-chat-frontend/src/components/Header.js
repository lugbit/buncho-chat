import React from "react";
import { AiFillMessage } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-title">Buncho Chat</div>
      <div className="logo">
        <AiFillMessage size={35} />
      </div>
    </div>
  );
};

export default Header;
