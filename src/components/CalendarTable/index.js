import React from 'react'
import './index.scss'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'
const CalendarTable = ({date}) => (
  <div>
    <DaysWeek />
    <DaysMonths date={date} />
  </div>
)
export default CalendarTable
