import { COMPLETE_NOTE } from '../constants/actionTypes'

const completeNote = (id) => ({
  type: COMPLETE_NOTE,
  payload: {
    id
  }
})

export default completeNote
