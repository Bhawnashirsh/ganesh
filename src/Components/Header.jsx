import React from "react";
import { IoMenuSharp } from "react-icons/io5";
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="userprofile">
          <img
            src="src/assets/avtar.jpg"
            alt=""
            width={50}
            height={50}
            className=""
          />
        </div>
        <div className="buttons">
          <a href="">Login</a>
          <a href="">Signup</a>
          <button onClick={toggleSidebar}><IoMenuSharp /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
