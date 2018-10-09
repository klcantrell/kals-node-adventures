import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './components/Home';

ReactDOM.render(
  <Home name="Kalalau" age={29} />,
  document.getElementById('app')
);
