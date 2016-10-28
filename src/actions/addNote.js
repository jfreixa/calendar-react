import * as types from './actionTypes'

const addNote = (date, description) => ({
  type: types.NEW_NOTE,
  payload: {
    id: new Date().getUTCMilliseconds(),
    date,
    description
  }
})

export default addNote
