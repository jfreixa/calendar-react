import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import root from './reducers/root'

import Calendar from './containers/Calendar'
import './index.scss'

let store = createStore(root)

const App = () => (
  <Provider store={store}>
    <Calendar />
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
