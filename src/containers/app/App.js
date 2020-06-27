import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import SearchForm from "../searchForm/SearchForm";

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
        <Link to="/search">Search</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/search" component={SearchForm} />
    </main>
  </div>
)

export default App
