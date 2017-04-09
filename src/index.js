import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import Calendar from './containers/Calendar'
import './index.scss'

const App = () => (
  <Provider store={store}>
    <Calendar />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
