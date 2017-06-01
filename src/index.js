import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from './components/Calendar'
import './index.scss'

const $activeDaysCalendar = document.getElementById('activeDaysCalendar')


let {athlete, language, athlete_type} = $activeDaysCalendar.dataset

ReactDOM.render(
  <Calendar athlete={athlete} language={language} athlete_type={athlete_type} />,
  $activeDaysCalendar
)
