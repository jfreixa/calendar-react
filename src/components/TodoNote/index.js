import React from 'react'

const TodoNote = ({ note, handleCompleted }) => (
  <p>
    <input
      onChange={handleCompleted}
      className='filled-in'
      type='checkbox'
      id={note.id} />
    <label htmlFor={note.id}>
      {note.description}
    </label>
  </p>
)

export default TodoNote
