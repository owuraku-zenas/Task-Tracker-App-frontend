import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Task Tracker</h1>
      <button className="close__btn">Clear Tasks</button>
    </header>
  );
}

export default Header;
