import * as types from '../actions/actionTypes'
import NOTES from '../data/notes'

const initialNotes = {
  notes: NOTES
}

const noteReducer = (state = initialNotes, action) => {
  let notes = [...state.notes]
  switch (action.type) {
    case types.NEW_NOTE:
      notes.push({
        id: `${action.payload.id}`,
        description: action.payload.description,
        date: action.payload.date
      })
      return {notes}
    case types.COMPLETE_NOTE:
      let updatedNotes = notes.filter(note => note.id !== action.payload.id)
      return {notes: updatedNotes}
    default:
      return state
  }
}

export default noteReducer
