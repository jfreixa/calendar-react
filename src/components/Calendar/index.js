import React, { Component } from 'react'
import './index.css'
import months from '../../data/months'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

class App extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      date: new Date()
    }

    this.handleDate = this.handleDate.bind(this)
  }

  handleDate ({target}) {
    let action = target.classList.contains('next') ? 1 : -1
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setMonth(updateDate.getMonth() + action)
    this.setState({
      date: updateDate
    })
  }

  render () {
    return (
      <div className='calendarContainer'>
        <ChangeMonth handleDate={this.handleDate} month={months[this.state.date.getMonth()]} />
        <CalendarTable date={this.state.date} />
      </div>
    )
  }
}

export default App
