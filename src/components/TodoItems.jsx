import "../styles/TodoItems.css";
import TodoItem from "./TodoItem";

function TodoItems({ todos, onDelete }) {

    if (todos.length < 1) {
        return (
            <div className="no__todos todo__items">
                <h2>Add A Task</h2>
                <span>📝</span>
            </div>
        );
    }


    return (
        <div className="todo__items">
            {
                todos.map((todo) => (
                    // <TodoItem key={todo.id} title={todo.title} date={todo.date} id={todo.id} completed={todo.completed} reminder={todo.reminder} onDelete={onDelete} />
                    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                ))
            }
        </div>
    );
}

export default TodoItems;
