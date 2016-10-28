import * as types from './actionTypes'

const completeNote = (id) => ({
  type: types.COMPLETE_NOTE,
  payload: {
    id
  }
})

export default completeNote
