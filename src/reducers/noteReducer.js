import { NEW_NOTE, COMPLETE_NOTE } from '../constants/actionTypes'
import NOTES from '../data/notes'

const initialNotes = {
  notes: NOTES
}

const noteReducer = (state = initialNotes, action) => {
  let notes = [...state.notes]
  switch (action.type) {
    case NEW_NOTE:
      notes.push({
        id: `${action.payload.id}`,
        description: action.payload.description,
        date: action.payload.date
      })
      return {notes}
    case COMPLETE_NOTE:
      let updatedNotes = notes.filter(note => note.id !== action.payload.id)
      return {notes: updatedNotes}
    default:
      return state
  }
}

export default noteReducer
