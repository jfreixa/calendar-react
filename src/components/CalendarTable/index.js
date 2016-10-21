import React from 'react'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'
const CalendarTable = ({date}) => (
  <table>
    <DaysWeek />
    <DaysMonths date={date} />
  </table>
)
export default CalendarTable
