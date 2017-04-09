import { TODO_DATE } from '../constants/actionTypes'

const initialTodoDate = {
  todoDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
}

const todoDateReducer = (state = initialTodoDate, action) => {
  switch (action.type) {
    case TODO_DATE:
      return {
        todoDate: action.payload.todoDate
      }
    default:
      return state
  }
}

export default todoDateReducer
