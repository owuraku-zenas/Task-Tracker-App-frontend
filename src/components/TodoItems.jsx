import "../styles/TodoItems.css";
import TodoItem from "./TodoItem";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

function TodoItems({ todos, onDelete }) {

    const [doneSectionToggle, setDoneSectionToggle] = useState(true)
    const [UnDoneSectionToggle, setUnDoneSectionToggle] = useState(true)

    if (todos.length < 1) {
        return (
            <div className="no__todos todo__items__area">
                <h2>Add A Task</h2>
                <span>📝</span>
            </div>
        );
    }


    return (
        <div className="todo__items__area">
            <div className="section">
                <span className="section__name" onClick={ () => setUnDoneSectionToggle(!UnDoneSectionToggle) } >
                    { UnDoneSectionToggle ? <HiChevronDown /> : <HiChevronRight /> }
                    Undone
                </span>
                {
                    UnDoneSectionToggle ?

                <div className="todo__items">
                    {
                        todos.filter((todo) => todo.completed === false).map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                        ))
                    }
                </div> : null
                }
            </div>
            <div className="section">
                <span className="section__name"  onClick={ () => setDoneSectionToggle(!doneSectionToggle) }>
                    { doneSectionToggle ? <HiChevronDown /> : <HiChevronRight /> }
                    Done
                </span>
                {
                    doneSectionToggle ?

                <div className="todo__items">
                    {
                        todos.filter((todo) => todo.completed === true).map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                        ))
                    }
                </div> : null
                }
            </div>
        </div>

    );
}

export default TodoItems;
