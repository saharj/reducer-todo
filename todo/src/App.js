import React, { useState, useReducer } from "react";
import "./App.css";

const initialState = { todoList: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "MAKE_COMPLETE":

    case "CLEAR_COMPLETE":

    default:
      return state;
  }
};

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
        {state.todoList.length > 0 &&
          state.todoList.map((todo) => <div>{todo.item}</div>)}
      </div>
    </div>
  );
}

export default App;
