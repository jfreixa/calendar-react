import React, { PropTypes } from 'react'
import './index.scss'
const sameDate = (date1, date2) => (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
)

const DaysMonths = ({date}) => {
  let actualDate = new Date(date.getTime())
  let actualMonth = actualDate.getMonth()
  let calendar = []

  actualDate.setDate(1)

  let firstDayOfMonth = (actualDate.getDay() === 0) ? 7 : actualDate.getDay()

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar.push({'dayClass': 'day', 'number': ''})
  }


  while (actualDate.getMonth() === actualMonth) {
    let dayClass = 'day'
    if (sameDate(actualDate, new Date())) {
      dayClass += ' today'
    }
    if (actualDate.getDay() === 1) {
      dayClass += ' clear'
    }
    calendar.push({'dayClass': dayClass, 'number': actualDate.getDate()})
    actualDate.setDate(actualDate.getDate() + 1)
  }

  if (actualDate.getDay() === 0) {
    for (let i = 7, j = calendar.length % 7; i > j; i--) {
      calendar.push({'dayClass': 'day', 'number': ''})
    }
  }

  return (
    <div className='dayContainer'>
      {calendar.map((day, index) => {
        return <div key={index} className={day.dayClass}>{day.number}</div>
      })}
    </div>
  )
}
DaysMonths.propTypes = {
  date: PropTypes.object.isRequired
}

export default DaysMonths
