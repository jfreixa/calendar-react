import { NEW_NOTE, COMPLETE_NOTE } from '../constants/actionTypes'
import NOTES from '../data/notes'

const noteReducer = (notes = NOTES, { type, payload }) => {
  switch (type) {
    case NEW_NOTE:
      return notes.concat({
        id: `${payload.id}`,
        description: payload.description,
        date: payload.date
      })
    case COMPLETE_NOTE:
      return notes.filter(note => note.id !== payload.id)
    default:
      return notes
  }
}

export default noteReducer
