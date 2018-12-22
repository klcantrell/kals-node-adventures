import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
