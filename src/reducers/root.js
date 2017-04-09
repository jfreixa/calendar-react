import { combineReducers } from 'redux'
import date from './dateReducer'
import todoDate from './todoDateReducer'
import notes from './noteReducer'

const root = combineReducers({
  date,
  todoDate,
  notes
})

export default root
