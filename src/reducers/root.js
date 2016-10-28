import { combineReducers } from 'redux'
import dateReducer from './dateReducer'
import todoDateReducer from './todoDateReducer'
import noteReducer from './noteReducer'

const root = combineReducers({
  dateReducer,
  todoDateReducer,
  noteReducer
})

export default root
