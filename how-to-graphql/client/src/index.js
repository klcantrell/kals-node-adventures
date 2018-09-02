import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_TOKEN } from './constants';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  request: operation => {
    const token = localStorage.getItem(AUTH_TOKEN);
    operation.setContext({
      headers: {
        authorization: token,
      }
    })
  },
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
