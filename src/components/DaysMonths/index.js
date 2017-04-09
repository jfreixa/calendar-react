import React from 'react'
import { object, func, array } from 'prop-types'
import './index.scss'

const sameDate = (date1, date2) => (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
)

const DaysMonths = ({date, handleDay, notes}) => {
  let actualDate = new Date(date.getTime())
  actualDate.setDate(1)

  let noteMonth = date
  let actualMonth = actualDate.getMonth()
  let calendar = []

  let firstDayOfMonth = (actualDate.getDay() === 0) ? 7 : actualDate.getDay()

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar.push({'dayClass': 'no-day', 'number': null})
  }

  while (actualDate.getMonth() === actualMonth) {
    let dayClass = 'day'
    if (sameDate(actualDate, new Date())) {
      dayClass += ' today'
    }
    if (actualDate.getDay() === 1) {
      dayClass += ' clear'
    }
    if (notes.find((note) => note.date === `${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}`)) {
      dayClass += ' note'
    }
    calendar.push({'dayClass': dayClass, 'number': actualDate.getDate()})
    actualDate.setDate(actualDate.getDate() + 1)
  }

  if (actualDate.getDay() === 0) {
    for (let i = 7, j = calendar.length % 7; i > j; i--) {
      calendar.push({'dayClass': 'no-day', 'number': null})
    }
  }

  return (
    <div className='dayContainer'>
      {calendar.map((day, index) => {
        let notesDay = `${day.number}/${noteMonth.getMonth() + 1}/${noteMonth.getFullYear()}`
        return day.number !== null
          ? <div key={index} onClick={handleDay} value={notesDay} className={day.dayClass}>{day.number}</div>
          : <div key={index} className={day.dayClass}></div>
      })}
    </div>
  )
}
DaysMonths.propTypes = {
  date: object.isRequired,
  handleDay: func.isRequired,
  notes: array.isRequired
}

export default DaysMonths
