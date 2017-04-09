import { INCREMENT, DECREMENT } from '../constants/actionTypes'

const initialDate = new Date()

const dateReducer = (date = initialDate, action) => {
  switch (action.type) {
    case INCREMENT:
      let increment = new Date(date.getTime())
      increment.setMonth(increment.getMonth() + 1)
      return increment
    case DECREMENT:
      let decrement = new Date(date.getTime())
      decrement.setMonth(decrement.getMonth() - 1)
      return decrement
    default:
      return date
  }
}

export default dateReducer
