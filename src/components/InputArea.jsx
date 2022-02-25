import React from 'react'
import "../styles/InputArea.css";

function InputArea() {
    return (
        <form className="input__area">
            <label htmlFor="add__task">Task</label>
            <input type="text" id="add__task" placeholder="Add Task" />
            <label htmlFor="add__date">Date</label>
            <input type="date" id="add__date" />
            <div className="reminder">
                <input type="checkbox" name="set__reminder" id="set__reminder" />
                <label htmlFor="set__reminder">Set Reminder</label>
            </div>
            <button className="save__task__btn">Save Task</button>
        </form>
    )
}

export default InputArea