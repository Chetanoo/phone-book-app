import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import SearchForm from '../search/Search'
import Header from '../../components/Header'

const App = () => (
  <div>
    <Header />
    <main>
      <div className="container justify-content-center">
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/search" component={SearchForm} />
      </div>
    </main>
  </div>
)

export default App
