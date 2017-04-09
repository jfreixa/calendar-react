import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import root from '../reducers/root'
import logMiddleware from '../middleware/log'

const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(logMiddleware)
  )
)

export default store
