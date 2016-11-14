import React, { PropTypes } from 'react'
import './index.scss'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'

const CalendarTable = ({date, handleDay}) => (
  <div>
    <DaysWeek />
    <DaysMonths date={date} />
  </div>
)

CalendarTable.propTypes = {
  date: PropTypes.object.isRequired
}

export default CalendarTable
