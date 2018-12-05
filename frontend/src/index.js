import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import configureStore from './configureStore'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
const store = configureStore(history);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<Root />,
 document.getElementById('root'));
