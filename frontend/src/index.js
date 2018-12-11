import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import PropTypes from 'prop-types'
import App from './pages/App'
import configureStore from './store/configureStore'

const history = createBrowserHistory()
const store = configureStore(history)

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(<Root />,
 document.getElementById('root'))
