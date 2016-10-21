import React, { PropTypes } from 'react'
import './index.css'
const sameDate = (date1, date2) => (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
)

const DaysMonths = ({date}) => {
  let actualDate = new Date(date.getTime())
  let actualMonth = actualDate.getMonth()
  let calendar = []
  calendar[0] = []

  actualDate.setDate(1)

  let firstDayOfMonth = (actualDate.getDay() === 0) ? 7 : actualDate.getDay()

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar[0].push('')
  }

  let weekOfMonth = 0

  while (actualDate.getMonth() === actualMonth) {
    let printDay = sameDate(actualDate, new Date()) ? actualDate.getDate() + 100 : actualDate.getDate()

    calendar[weekOfMonth].push(printDay)

    actualDate.setDate(actualDate.getDate() + 1)

    if (actualDate.getDay() === 1) {
      weekOfMonth++
      calendar[weekOfMonth] = []
    }
  }

  for (let i = 7, j = calendar[weekOfMonth].length; i > j; i--) {
    calendar[weekOfMonth].push('')
  }

  return (
    <div>
      {calendar.map((week, index) => (
        <div key={index}>
          {week.map((day, index) => ((day > 100) ? <div key={index} className='today day'> {day - 100}</div> : <div className='day' key={index}>{day}</div>))}
        </div>
      ))}
    </div>
  )
}
DaysMonths.propTypes = {
  date: PropTypes.object.isRequired
}

export default DaysMonths
