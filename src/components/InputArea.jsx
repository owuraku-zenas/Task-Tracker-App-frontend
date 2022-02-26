import React, { useState } from 'react'
import "../styles/InputArea.css";


function InputArea({ addTask }) {
    const [todoInput, setTodoInput] = useState('')
    const [dateInput, setDateInput] = useState('')
    const [reminderInput, setReminderInput] = useState(false)

    const formHandler = (event) => {
        event.preventDefault()
        let newTodo = {
            id: Date.now(),
            title: todoInput,
            date: dateInput,
            completed: false,
            reminder: reminderInput
        }
        addTask(newTodo)
    }
    return (
        <form className="input__area" onSubmit={formHandler}>
            <label htmlFor="add__task">Task</label>
            <input
                type="text" id="add__task"
                value={todoInput}
                onChange={(e) => {
                    setTodoInput(e.target.value)
                }}
                placeholder="Add Task"
                required
            />
            <label htmlFor="add__date">Date</label>
            <input
                type="text" id="add__date"
                value={dateInput}
                onChange={(e) => {
                    setDateInput(e.target.value)
                }}
                placeholder="Add Due Date"
                required
            />

            <div className="reminder">
                <input
                    type="checkbox" name="set__reminder" id="set__reminder"
                    value={reminderInput}
                    onChange={() => {
                        setReminderInput(!reminderInput);
                    }}
                />
                <label htmlFor="set__reminder">Set Reminder</label>
            </div>
            <button className="save__task__btn">Save Task</button>
        </form>

    )

}



export default InputArea