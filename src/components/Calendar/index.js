import React, { Component } from 'react'
import './index.scss'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

import months from '../../data/months'

class Calendar extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      date: new Date(),
      activeDays: []
    }
    
    this.handleNextDate = this.handleNextDate.bind(this)
    this.handlePreviousDate = this.handlePreviousDate.bind(this)   
    this.activeDaysState = this.activeDaysState.bind(this) 
  }

  componentWillMount(){
    this.updateActiveDays()
  }

  updateActiveDays(){
    fetch('http://localhost:3000/activedays', {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
    .then(this.activeDaysState).catch(function(err) {
      console.log(err)
    });
  }

  activeDaysState(json){
    this.setState({
        activeDays: json
    })
  }
  
  handleNextDate () {
    this.updateDate(1)
  }

  handlePreviousDate () {
    this.updateDate(-1)    
  }

  updateDate(value){
    let updateDate = new Date(this.state.date.getTime())
    updateDate.setMonth(updateDate.getMonth() + value)
    this.setState({
      date: updateDate
    })
    this.updateActiveDays();
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
            <CalendarTable date={this.state.date} activeDays={this.state.activeDays} />
          </div>
        </div>
    )
  }
}

export default Calendar
