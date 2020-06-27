import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app/App'

import 'sanitize.css/sanitize.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.slim.min.js'
import '../node_modules/popper.js/dist/umd/popper.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
