import React from 'react'
import { func, string, array, object } from 'prop-types'

import './index.scss'

import { connect } from 'react-redux'

import { increment, decrement, todoDateAction, addNote, completeNote } from '../../actions'
import { TodoDay, ChangeMonth, DaysWeek, DaysMonths } from '../../components'

const Calendar = (props) => {
  const handleDay = ({ target }) => {
    let todoDate = target.getAttribute('value')
    props.changeTodoDate(todoDate)
  }

  const handleNoteKeyPress = ({ target, key }) => {
    if (key === 'Enter' && target.value !== '') {
      props.addNote(props.todoDate, target.value)
      target.value = ''
    }
  }

  const handleCompleted = ({ target }) => {
    let id = target.id
    setTimeout(() => props.completeNote(id), 700)
  }

  return (
    <div>
      <TodoDay
        todoDate={props.todoDate}
        handleNoteKeyPress={handleNoteKeyPress}
        notes={props.notes}
        handleCompleted={handleCompleted}
      />
      <div className='calendarContainer'>
        <ChangeMonth
          handleDateUp={props.increment}
          handleDateDown={props.decrement}
          date={props.date}
        />
        <div className='fullCalendar'>
          <DaysWeek />
          <DaysMonths date={props.date} handleDay={handleDay} notes={props.notes} />
        </div>
      </div>
    </div>
  )
}

Calendar.propTypes = {
  date: object.isRequired,
  notes: array.isRequired,
  todoDate: string.isRequired,
  increment: func.isRequired,
  decrement: func.isRequired,
  changeTodoDate: func.isRequired,
  addNote: func.isRequired,
  completeNote: func.isRequired
}

const mapStateToProps = ({ notes, date, todoDate }) => ({
  notes,
  date,
  todoDate
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changeTodoDate: (todoDate) => dispatch(todoDateAction(todoDate)),
  addNote: (date, description) => dispatch(addNote(date, description)),
  completeNote: (id) => dispatch(completeNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
