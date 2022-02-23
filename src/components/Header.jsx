import React from "react";
import "../styles/Header.css";

function Header({ clearTasks, length, showInputArea }) {
  return (
    <header>
      <h1>Task Tracker</h1>
      <button className="add__btn" onClick={showInputArea}>Add Task</button>
      {length > 0 ? <button className="clear__btn" onClick={clearTasks}>Clear Tasks</button> : null}
      
    </header>
  );
}

export default Header;
