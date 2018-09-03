import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
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

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnection: true,
    connectionParams: {
      authToken: localStorage.getItem(AUTH_TOKEN),
    },
  },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink),
);


const client = new ApolloClient({
  link,
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
