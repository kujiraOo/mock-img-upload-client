import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from 'react-apollo'
import {createNetworkInterface} from 'apollo-upload-client'
import ApolloClient from 'apollo-client'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql'
  })
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
