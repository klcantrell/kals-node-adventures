import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome';

import App from './components/App';

ReactDOM.render(
  <Router>
    <App>
      <Route path="/" exact component={Welcome} />
    </App>
  </Router>,
  document.querySelector('#root'));