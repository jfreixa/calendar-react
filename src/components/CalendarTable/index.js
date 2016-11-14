import React, { PropTypes } from 'react'
import './index.scss'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'

const CalendarTable = ({date, activeDays}) => (
  <div>
    <DaysWeek />
    <DaysMonths date={date} activeDays={activeDays} />
  </div>
)

CalendarTable.propTypes = {
  date: PropTypes.object.isRequired
}

export default CalendarTable
