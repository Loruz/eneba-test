import React from 'react'
import './assets/styles/App.css'
import AppNavigation from './components/AppNavigation/AppNavigation'
import AppFooter from './components/AppFooter/AppFooter'
import ProjectPage from './components/ProjectPage/ProjectPage'

import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client'

const link = from([
  new HttpLink({ uri: 'http://localhost:4000' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App () {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <AppNavigation/>
        <ProjectPage/>
        <AppFooter/>
      </div>
    </ApolloProvider>
  )
}

export default App
