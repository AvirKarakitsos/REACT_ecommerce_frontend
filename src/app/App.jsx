import './App.css'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from '@apollo/client'
import {onError} from '@apollo/client/link/error'

import { Provider } from 'react-redux';
import { store } from './app/store.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Summary from './pages/Summary.jsx';
import Error from './pages/Error.jsx';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/summary',
    element: <Summary/>
  },
  {
    path: '*',
    element: <Error/>
  }
])

function App() {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApolloProvider>
  )

}

export default App