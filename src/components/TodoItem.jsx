import React from "react";
import "../styles/TodoItem.css";


function TodoItem({ title, date, completed, reminder }) {

    let complete = {
        borderLeft: "10px solid rgb(0, 0, 197)",

    }

    let reminderOn = {
        backgroundColor: "rgb(0, 0, 197)",
        color: "white",
        borderRadius: "5px",
        padding: "4px",
        fontSize: "small",
        marginRight: "15px"
    }

    let reminderOff = {
        backgroundColor: " rgb(197, 56, 0)",
        color: "white",
        borderRadius: "5px",
        padding: "4px",
        fontSize: "small",
        marginRight: "15px"
    }

    return (

        <div className="todo__item" style={completed ? complete : null}>
            <h3>
                {title}
                <div className="remove__task__btn">x</div>
            </h3>
            <p className="date">{date} <span style={reminder ? reminderOn : reminderOff}>{reminder ? "Reminder On" : "Reminder Off"}</span></p>
        </div>
    );
}

export default TodoItem;
