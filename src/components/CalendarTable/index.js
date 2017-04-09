import React from 'react'
import { object, func, array } from 'prop-types'

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
  date: object.isRequired,
  handleDay: func.isRequired,
  notes: array.isRequired
}

export default CalendarTable
