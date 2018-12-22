import React from "react";
import { connect } from "react-redux";
import * as Todo from "../todo";
import * as TodoInput from "../todoinput";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
} from "../../actionCreators";
import { Route } from "react-router-dom";

class List extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  handleSubmit = task => {
    this.props.addTodo(task);
  };

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  handleUpdate = id => {
    this.props.updateTodo(id);
  };

  render() {
    const { todos } = this.props;
    const todosComponents = todos.map(todo => (
      <Todo.main
        key={todo._id}
        todoId={todo._id}
        deleteTodo={this.handleDelete}
        updateTodo={this.handleUpdate}
        task={todo.task}
        todoCompleted={todo.completed}
      />
    ));

    return (
      <div>
        <Route
          path="/todos/new"
          render={props => (
            <TodoInput.main {...props} handleSubmit={this.handleSubmit} />
          )}
        />
        <Route
          exact
          path="/todos"
          component={() => (
            <div className="todolist">
              <ul>{todosComponents}</ul>
            </div>
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps, {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo
})(List);
