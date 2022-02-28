import React from "react";
import "../styles/TodoItem.css";


function TodoItem({ todo, onDelete }) {

    let complete = {
        borderLeft: "10px solid rgb(0, 0, 197)",

    }

    let reminderOn = {
        backgroundColor: "rgb(0, 0, 197)",
        color: "white",
        borderRadius: "5px",
        padding: "4px",
        fontSize: "small",
        marginRight: "15px",
        boxShadow: "0 16px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgba(0, 0, 255, 0.5)"
    }

    let reminderOff = {
        backgroundColor: " rgb(197, 56, 0)",
        color: "white",
        borderRadius: "5px",
        padding: "4px",
        fontSize: "small",
        marginRight: "15px",
        boxShadow: "0 16px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgba(255, 0, 0, 0.5)"
    }

    return (
        <div className="todo__item">
            <div className="info">
                <h3> {todo.title} </h3>
                <p className="date"> {todo.date} </p>
            </div>
            <span style={todo.reminder ? reminderOn : reminderOff} className="reminder">{todo.reminder ? "Reminder On" : "Reminder Off"}</span>
            <div className="remove__task__btn" onClick={ () => onDelete(todo.id) }>x</div>
        </div>
    );
}

export default TodoItem;
