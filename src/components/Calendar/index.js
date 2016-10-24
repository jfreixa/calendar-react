import React, { Component } from 'react'
import './index.scss'
import TodoDay from '../TodoDay'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

import months from '../../data/months'
import NOTES from '../../data/notes'

class Calendar extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      date: new Date(),
      notes: NOTES,
      todoDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
    }

    this.handleDate = this.handleDate.bind(this)
    this.handleDay = this.handleDay.bind(this)
    this.handleNoteKeyPress = this.handleNoteKeyPress.bind(this)
    this.handleCompleted = this.handleCompleted.bind(this)
  }

  handleDate ({target}) {
    let action = target.classList.contains('next') ? 1 : -1
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setMonth(updateDate.getMonth() + action)
    this.setState({
      date: updateDate
    })
  }

  handleDay ({target}) {
    let todoDate = target.getAttribute('value')

    this.setState({
      todoDate: todoDate
    })
  }

  handleNoteKeyPress ({target, key}) {
    if (key === 'Enter' && target.value !== '') {
      let date = this.state.todoDate
      let notes = this.state.notes.slice()
      let lastObject = notes[notes.length - 1]
      let newID = parseInt(lastObject.id, 10) + 1

      notes.push({
        id: `${newID}`,
        description: target.value,
        date: date
      })

      this.setState({notes})
      target.value = ''
    }
  }

  handleCompleted ({target}) {
    const notes = this.state.notes.slice()
    let updatedNotes = notes.filter(note => note.id !== target.id)

    setTimeout(() => this.setState({
      notes: updatedNotes
    }), 500)
  }

  render () {
    return (
      <div>
        <TodoDay todoDate={this.state.todoDate} handleNoteKeyPress={this.handleNoteKeyPress} notes={this.state.notes} handleCompleted={this.handleCompleted} />
        <div className='calendarContainer'>
          <ChangeMonth handleDate={this.handleDate} month={months[this.state.date.getMonth()]} year={this.state.date.getFullYear()} />
          <div className='fullCalendar'>
            <CalendarTable date={this.state.date} notes={this.state.notes} handleDay={this.handleDay} />
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
