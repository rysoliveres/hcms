import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider,gql } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './utilities/navigation';

const client = new ApolloClient({
  uri: 'http://localhost/wpheadless/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <ApolloProvider client={client}>
  {/* <Navigation/> */}
    <App />
    </ApolloProvider>

)

reportWebVitals();
