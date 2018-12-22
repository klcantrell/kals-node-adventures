import React, { Component } from 'react';
import './App.css';
import * as Todolist from './components/todolist';
import { Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>todolist</h1>
        <nav>
          <Link to="/todos">See my todos</Link>
          <Link to="/todos/new">Add a todo</Link>
        </nav>
        <Route path="/todos" component={Todolist.main} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
