export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const GET_TODOS = "GET_TODOS";

function handleTodos(data) {
  return {
    type: GET_TODOS,
    data
  };
}

function handleAdd(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function handleDelete(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

function handleUpdate(id) {
  return {
    type: UPDATE_TODO,
    id
  };
}

export function getTodos() {
  return dispatch => {
    return fetch("http://localhost:3001/api/todos")
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

export function addTodo(task) {
  return dispatch => {
    return fetch("http://localhost:3001/api/todos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
      .then(res => res.json())
      .then(todoData => dispatch(handleAdd(todoData)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

export function deleteTodo(id) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/todos/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => dispatch(handleDelete(id)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

export function updateTodo(id, completed) {
  return dispatch => {
    return fetch(`http://localhost:3001/api/todos/${id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ completed: !completed })
    })
      .then(res => res.json())
      .then(data => dispatch(handleUpdate(id)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}
