import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_TOKEN } from './constants';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((reqest, previousContext) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
