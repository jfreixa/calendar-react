import React from 'react'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'
const CalendarTable = ({daysWeek, date}) => (
  <table>
    <DaysWeek days={daysWeek} />
    <DaysMonths date={date} />
  </table>
)
export default CalendarTable
