import * as types from '../actions/actionTypes'

const initialDate = {
  date: new Date()
}

const dateReducer = (state = initialDate, action) => {
  switch (action.type) {
    case types.INCREMENT:
      let increment = new Date(state.date.getTime())
      increment.setMonth(increment.getMonth() + 1)
      return {
        date: increment
      }
    case types.DECREMENT:
      let decrement = new Date(state.date.getTime())
      decrement.setMonth(decrement.getMonth() - 1)
      return {
        date: decrement
      }
    default:
      return state
  }
}

export default dateReducer
