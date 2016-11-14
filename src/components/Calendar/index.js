import React, { Component } from 'react'
import './index.scss'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

import months from '../../data/months'

class Calendar extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      date: new Date()
    }

    this.handleNextDate = this.handleNextDate.bind(this)
    this.handlePreviousDate = this.handlePreviousDate.bind(this)    
  }

  handleNextDate ({ target }) {
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setMonth(updateDate.getMonth() + 1)
    this.setState({
      date: updateDate
    })
  }

  handlePreviousDate ({ target }) {
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setMonth(updateDate.getMonth() - 1)
    this.setState({
      date: updateDate
    })
  }

  render () {
    return (
        <div className='calendarContainer'>
          <ChangeMonth 
            handleNextDate={this.handleNextDate} 
            handlePreviousDate={this.handlePreviousDate} 
            month={months[ this.state.date.getMonth() ]} 
            year={this.state.date.getFullYear()} 
          />
          <div className='fullCalendar'>
            <CalendarTable date={this.state.date} />
          </div>
        </div>
    )
  }
}

export default Calendar
