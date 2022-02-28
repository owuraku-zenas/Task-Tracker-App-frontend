import "../styles/TodoItems.css";
import TodoItem from "./TodoItem";

function TodoItems({ todos, onDelete }) {

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
                <span className="section__name">
                    Undone
                </span>
                <div className="todo__items">
                    {
                        todos.filter((todo) => todo.completed === false).map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                        ))
                    }
                </div>
            </div>
            <div className="section">
                <span className="done">
                    Done
                </span>
                <div className="todo__items">
                    {
                        todos.filter((todo) => todo.completed === true).map((todo) => (
                            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                        ))
                    }
                </div>
            </div>
        </div>

    );
}

export default TodoItems;
