import React, { Component } from 'react'
import './index.scss'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

import { daysWeek, months } from '../../data'

class Calendar extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      date: new Date(),
      activeDays: [],
    }

    this.handleNextDate = this.handleNextDate.bind(this)
    this.handlePreviousDate = this.handlePreviousDate.bind(this)
  }

  componentWillMount () {
    this.updateActiveDays()
  }

  updateActiveDays () {
    let date = this.state.date
    let month = date.getMonth() + 1
    month = month < 10 ? `0${month}` : month
    const URL = `/common/${this.props.athlete_type}/month_reserves/${this.props.athlete}/${date.getFullYear()}-${month}-${date.getDate()}`
    fetch(URL)
    .then(response => response.json())
    .then(json => {
      this.setState({
        activeDays: json,
      })
    })
  }

  handleNextDate () {
    this.updateDate(1)
  }

  handlePreviousDate () {
    this.updateDate(-1)
  }

  updateDate (value) {
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setDate(1)
    updateDate.setMonth(updateDate.getMonth() + value)
    this.setState({
      date: updateDate,
      activeDays: [],
    }, this.updateActiveDays)
  }

  render () {
    return (
      <div className='calendarContainer'>
        <ChangeMonth
          handleNextDate={this.handleNextDate}
          handlePreviousDate={this.handlePreviousDate}
          month={months[this.props.language][this.state.date.getMonth()]}
          year={this.state.date.getFullYear()}
        />
        <div className='fullCalendar'>
          <CalendarTable date={this.state.date}
                         activeDays={this.state.activeDays}
                         daysWeek={daysWeek[this.props.language]}/>
        </div>
      </div>
    )
  }
}

export default Calendar
