import * as types from './actionTypes'

const todoDateAction = (updateTodoDate) => ({
  type: types.TODO_DATE,
  payload: {
    todoDate: updateTodoDate
  }
})

export default todoDateAction
