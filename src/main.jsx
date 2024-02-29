import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client'
import {onError} from '@apollo/client/link/error'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


library.add(faBasketShopping);


const errorLink = onError(({graphQLErrors}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({message}) => alert(`Error GraphQL: ${message}`))
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql"})
])

const client = new ApolloClient({
  cache:  new InMemoryCache(),
  link: link
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
