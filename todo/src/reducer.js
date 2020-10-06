export const initialState = { todoList: [] };
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "MAKE_COMPLETE":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          return item.id === action.payload
            ? { ...item, completed: true }
            : item;
        }),
      };
    case "CLEAR_COMPLETE":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.completed === false),
      };
    default:
      return state;
  }
};
