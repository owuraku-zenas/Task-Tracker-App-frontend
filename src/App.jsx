import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InputArea from './components/InputArea';
import TodoItems from './components/TodoItems';

function App() {
  const [todoList, setTodoList] = useState([
    // {
    //   title: "Todo 1",
    //   date: "01/29/22",
    //   completed: true,
    //   reminder: false
    // },
    // {
    //   title: "Todo 1",
    //   date: "01/29/22",
    //   completed: false,
    //   reminder: true
    // },
    // {
    //   title: "Todo 1",
    //   date: "01/29/22",
    //   completed: false,
    //   reminder: false
    // },
    // {
    //   title: "Todo 1",
    //   date: "01/29/22",
    //   completed: true,
    //   reminder: true
    // },
  ])

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputArea />
        <TodoItems todos={todoList}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
