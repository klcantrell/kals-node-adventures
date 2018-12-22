import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  GET_TODOS
} from "./actionCreators";

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  let todos;
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data };
    case ADD_TODO:
      todos = [...state.todos, action.todo];
      return { ...state, todos };
    case DELETE_TODO:
      todos = state.todos.filter(todo => todo._id !== action.id);
      return { ...state, todos };
    case UPDATE_TODO:
      todos = state.todos.map(todo => {
        if (todo._id === action.id) {
          const completed = !todo.completed;
          return { ...todo, completed };
        } else {
          return todo;
        }
      });
      return { ...state, todos };
    default:
      return state;
  }
}
