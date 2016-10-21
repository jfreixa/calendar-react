import React from 'react'
import './index.css'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'
const CalendarTable = ({date}) => (
  <div>
    <DaysWeek />
    <DaysMonths date={date} />
  </div>
)
export default CalendarTable
