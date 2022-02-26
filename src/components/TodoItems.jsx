import "../styles/TodoItems.css";
import TodoItem from "./TodoItem";

function TodoItems({ todos }) {

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
                    <TodoItem key={todo.id} title={todo.title} date={todo.date} completed={todo.completed} reminder={todo.reminder} />
                ))
            }
        </div>
    );
}

export default TodoItems;
