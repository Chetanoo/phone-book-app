import React from 'react'
import { Route } from 'react-router-dom'
import About from '../about/About'
import SearchForm from '../search/Search'
import Header from '../../components/Header'
import CreateSubscriber from '../create/CreateSubscriber'
import Notificator from '../Notificator/Notificator'

const App = () => (
  <div>
    <Header />
    <Notificator>
      <main>
        <div className="container justify-content-center">
          <Route exact path="/about-us" component={About} />
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/create" component={CreateSubscriber} />
        </div>
      </main>
    </Notificator>
  </div>
)

export default App
