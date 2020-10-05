import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: inputVal,
      id: Date.now(),
      completed: false,
    };
    setTodoList([...todoList, newTask]);
    setInputVal("");
  };
  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="string"
            name="todo"
            value={inputVal}
            placeholder="...todo"
            onChange={onInputChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
      <div>
        {todoList.length > 0 && todoList.map((todo) => <div>{todo.task}</div>)}
      </div>
    </div>
  );
}

export default App;
