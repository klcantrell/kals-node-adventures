import React from 'react';
import './todo.css';

const Todo = ({ task, todoCompleted, deleteTodo, todoId, updateTodo }) => {
  const styles = {
    todo: {
      display: 'flex',
      width: '80%',
      maxWidth: 400,
      justifyContent: 'space-between',
      margin: '0 auto',
    },
    li: {
      flexGrow: 1,
      textAlign: 'left',
      cursor: 'pointer',
    },
    button: {
      fontSize: 20,
      cursor: 'pointer',
    },
    completed: {
      textDecoration: 'line-through',
    },
  };

  return (
    <div style={styles.todo}>
      <li
        onClick={() => updateTodo(todoId)}
        style={
          todoCompleted ? { ...styles.li, ...styles.completed } : styles.li
        }
      >
        {task}
      </li>
      <span
        className="delete-todo-btn"
        style={styles.button}
        onClick={() => deleteTodo(todoId)}
      >
        X
      </span>
    </div>
  );
};

export default Todo;
