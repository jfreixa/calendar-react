import { TODO_DATE } from '../constants/actionTypes'

const initialTodoDate = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`

const todoDateReducer = (todoDate = initialTodoDate, { type, payload }) => {
  switch (type) {
    case TODO_DATE:
      return payload.todoDate
    default:
      return todoDate
  }
}

export default todoDateReducer
