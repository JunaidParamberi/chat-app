import React from "react";
import SearchIcon from "../assets/SearchIcon.svg";
import avtar from "../assets/avatar.jpeg";

function Header() {
  return (
    <div className="header-container">
      <div className="chat-search-container">
        <img className="icon" src={SearchIcon} alt="" />
        <input type="search" placeholder="Search" />
      </div>
      <img className="avatar" src={avtar} alt="" />
    </div>
  );
}

export default Header;
