import React, { PropTypes } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { increment, decrement, todoDateAction, addNote, completeNote } from '../../actions'
import { TodoDay, ChangeMonth, CalendarTable } from '../../components'

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
    setTimeout(() => props.completeNote(target.id), 700)
  }

  return (
    <div>
      <TodoDay
        todoDate={props.todoDate}
        handleNoteKeyPress={handleNoteKeyPress}
        notes={props.notes}
        handleCompleted={handleCompleted} />
      <div className='calendarContainer'>
        <ChangeMonth handleDateUp={props.increment} handleDateDown={props.decrement} month={props.date.getMonth()} year={props.date.getFullYear()} />
        <div className='fullCalendar'>
          <CalendarTable date={props.date} notes={props.notes} handleDay={handleDay} />
        </div>
      </div>
    </div>
  )
}

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  todoDate: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  changeTodoDate: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  completeNote: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    ...state.dateReducer,
    ...state.todoDateReducer,
    ...state.noteReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    changeTodoDate: (todoDate) => dispatch(todoDateAction(todoDate)),
    addNote: (date, description) => dispatch(addNote(date, description)),
    completeNote: (id) => dispatch(completeNote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
