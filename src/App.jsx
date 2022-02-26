import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InputArea from './components/InputArea';
import TodoItems from './components/TodoItems';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Todo 1",
      date: "01/29/22",
      completed: true,
      reminder: false
    },
    {
      id: 2,
      title: "Todo 2",
      date: "01/29/22",
      completed: false,
      reminder: true
    },
    {
      id: 3,
      title: "Todo 3",
      date: "01/29/22",
      completed: false,
      reminder: false
    },
    {
      id: 4,
      title: "Todo 4",
      date: "01/29/22",
      completed: true,
      reminder: true
    },
  ])

  const [inputAreaToggle, setInputAreaToggle] = useState(false)

  const toggleInputArea = () => {
    setInputAreaToggle(!inputAreaToggle)
  }

  // Delete task
  const deleteTask = (id) => {
    console.log("delete", id);
  }

  /**
   * Add task
   */
  const addTask = (newTask) => {
    setTodoList([...todoList, newTask])
    console.log("This is working");
  }

  // Clear all tasks
  const deleteTasks = () => {
    setTodoList([])
    // console.log("tasks Deleted")
  }

  return (
    <div className="App">
      <div className="container">
        <Header clearTasks={deleteTasks} length={todoList.length} showInputArea={toggleInputArea} />
        {inputAreaToggle ? <InputArea addTask={addTask} /> : null}
        <TodoItems todos={todoList} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
