import React, { useState, useReducer } from "react";
import "./App.css";

import { initialState, reducer } from "./reducer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const onInputChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      item: inputVal,
      id: Date.now(),
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTask });
    setInputVal("");
  };

  const onItemClick = (e, todo) => {
    dispatch({ type: "MAKE_COMPLETE", payload: todo.id });
  };

  const onClearClick = (e) => {
    dispatch({ type: "CLEAR_COMPLETE" });
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
          <button onClick={onClearClick}>Clear Completed</button>
        </form>
      </div>
      <div>
        {state.todoList.length > 0 &&
          state.todoList.map((todo, i) => (
            <div
              key={i}
              onClick={(e) => onItemClick(e, todo)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
