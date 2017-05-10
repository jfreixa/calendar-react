import React, { Component } from 'react'
import './index.scss'
import ChangeMonth from '../ChangeMonth'
import CalendarTable from '../CalendarTable'

import { daysWeek, months } from '../../data'

class Calendar extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            date: new Date(),
            activeDays: []
        }

        this.handleNextDate = this.handleNextDate.bind(this)
        this.handlePreviousDate = this.handlePreviousDate.bind(this)
        this.activeDaysState = this.activeDaysState.bind(this)
    }

    componentWillMount() {
        let path = window.location.href
        path = path.split("/")
        this.athlete = path[5]
        switch (path[6]) {
            case 'details':
                this.language = 2
                break
            case 'detalls':
                this.language = 0
                break
            default:
                this.language = 1
        }
        this.numberAthlete = path[7]
        this.updateActiveDays()
    }

    ajaxCall(url, callback) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
                callback(xmlhttp.responseText)
            }
        }
        xmlhttp.open("GET", url, true)
        xmlhttp.send();
    }

    updateActiveDays() {
        let date = this.state.date
        let month = date.getMonth() + 1
        month = month < 10 ? `0${month}` : month
        const URL = `/box/${this.athlete}/month_reserves/${this.numberAthlete}/${date.getFullYear()}-${month}-${date.getDate()}`
        this.ajaxCall(URL, this.activeDaysState)
    }

    activeDaysState(response) {
        this.setState({
            activeDays: JSON.parse(response)
        })
    }

    handleNextDate() {
        this.updateDate(1)
    }

    handlePreviousDate() {
        this.updateDate(-1)
    }

    updateDate(value) {
        let updateDate = new Date(this.state.date.getTime())
        updateDate.setMonth(updateDate.getMonth() + value)
        this.setState({
            date: updateDate,
            activeDays: []
        }, this.updateActiveDays)

    }

    render() {
        return (
            <div className='calendarContainer'>
                <ChangeMonth
                    handleNextDate={this.handleNextDate}
                    handlePreviousDate={this.handlePreviousDate}
                    month={months[this.language][this.state.date.getMonth()]}
                    year={this.state.date.getFullYear()}
                    />
                <div className='fullCalendar'>
                    <CalendarTable date={this.state.date} activeDays={this.state.activeDays} daysWeek={daysWeek[this.language]} />
                </div>
            </div>
        )
    }
}

export default Calendar
