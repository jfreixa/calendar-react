import React from 'react'
import { func, string, array } from 'prop-types'
import './index.scss'

import months from '../../data/months'

const TodoDay = ({todoDate, handleNoteKeyPress, notes, handleCompleted}) => {
  let infoToday = todoDate.split('/')
  let noteDate = `${infoToday[0]}, de ${months[infoToday[1] - 1]} del ${infoToday[2]}`
  let searchNote = notes.map(note => note.date === todoDate ? note : ' ')
  searchNote = searchNote.filter(note => /\S/.test(note))

  return (
    <div className='todoDay'>
      <h5>{noteDate}</h5>
      <div className='input-field'>
        <input onKeyPress={handleNoteKeyPress} type='text' id='note' />
        <label htmlFor='note'>
          Introdueix una nota
        </label>
      </div>
      { searchNote.length > 0 ? (
        <div>
          {searchNote.map((note, index) => (
            <p key={note.id}>
              <input
                onChange={handleCompleted}
                className='filled-in'
                type='checkbox'
                id={note.id} />
              <label htmlFor={note.id}>
                {note.description}
              </label>
            </p>
            ))}
        </div>)
         : ''}
    </div>
  )
}
TodoDay.propTypes = {
  todoDate: string,
  handleNoteKeyPress: func.isRequired,
  notes: array.isRequired,
  handleCompleted: func.isRequired
}
export default TodoDay
