import React, { PropTypes } from 'react'
import './index.scss'
import DaysWeek from '../DaysWeek'
import DaysMonths from '../DaysMonths'

const CalendarTable = ({date, handleDay, notes}) => (
  <div>
    <DaysWeek />
    <DaysMonths date={date} handleDay={handleDay} notes={notes} />
  </div>
)

CalendarTable.propTypes = {
  date: PropTypes.object.isRequired,
  handleDay: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
}

export default CalendarTable
