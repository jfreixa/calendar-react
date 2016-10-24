import React, { PropTypes } from 'react'
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
        <input onKeyPress={handleNoteKeyPress} type='text' name='note' />
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
  todoDate: PropTypes.string,
  handleNoteKeyPress: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  handleCompleted: PropTypes.func.isRequired
}
export default TodoDay
