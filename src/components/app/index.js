import React, { Component } from 'react'
import './App.css'
import daysWeek from '../../data/daysWeek'
import months from '../../data/months'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }

    this.handleDate = this.handleDate.bind(this)
  }

  handleDate ({target}) {
    let action = target.dataset.month === 'next' ? 1 : -1

    let updateDate = new Date(this.state.date.getTime())

    updateDate.setMonth(updateDate.getMonth() + action)

    console.log(updateDate.getMonth() + action)
    this.setState({
      date: updateDate
    })
  }

  render () {
    return (
      <div>
        <ChangeMonth handleDate={this.handleDate} month={months[this.state.date.getMonth()]} />
        <CalendarTable daysWeek={daysWeek} date={this.state.date} />
      </div>
    )
  }
}

export default App
