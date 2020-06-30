import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import SearchForm from '../search/Search'
import Header from '../../components/Header'
import CreateSubscriber from '../create/CreateSubscriber'

const App = () => (
  <div>
    <Header />
    <main>
      <div className="container justify-content-center">
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/search" component={SearchForm} />
        <Route exact path="/create" component={CreateSubscriber} />
      </div>
    </main>
  </div>
)

export default App
