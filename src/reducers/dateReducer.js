import { INCREMENT, DECREMENT } from '../constants/actionTypes'

const initialDate = {
  date: new Date()
}

const dateReducer = (state = initialDate, action) => {
  switch (action.type) {
    case INCREMENT:
      let increment = new Date(state.date.getTime())
      increment.setMonth(increment.getMonth() + 1)
      return {
        date: increment
      }
    case DECREMENT:
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
