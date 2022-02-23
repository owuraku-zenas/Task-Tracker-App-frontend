import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InputArea from './components/InputArea';
import TodoItems from './components/TodoItems';

function App() {
  const [todoList, setTodoList] = useState([
    {
      title: "Todo 1",
      date: "01/29/22",
      completed: true,
      reminder: false
    },
    {
      title: "Todo 2",
      date: "01/29/22",
      completed: false,
      reminder: true
    },
    {
      title: "Todo 3",
      date: "01/29/22",
      completed: false,
      reminder: false
    },
    {
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

  // Clear all tasks
  const deleteTasks = () => {
    setTodoList([])
    // console.log("tasks Deleted")
  }

  return (
    <div className="App">
      <div className="container">
        <Header clearTasks={deleteTasks} length={todoList.length} showInputArea={toggleInputArea}/>
        {inputAreaToggle ? <InputArea /> : null}
        <TodoItems todos={todoList}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
