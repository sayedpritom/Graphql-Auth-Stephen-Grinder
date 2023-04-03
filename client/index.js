import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './components/App'
import LoginFrom from './components/LoginForm';
import SignupForm from './components/Signupform';
import Dashboard from './components/Dashboard';
import RequireAuth from './components/HOC/RequireAuth';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  // every record fetched from the backend will be ran 
  // through this function & identify by returning the ID. 
  // Maybe something like passing key in react components
  networkInterface,
  dataIDFromObject: o => o.id
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}> 
          <Route path="/login" replace component={LoginFrom} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
