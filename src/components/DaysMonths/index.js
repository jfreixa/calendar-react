import React from 'react'
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
    let printDay = (actualDate.getDate() === new Date().getDate() &&
    actualDate.getMonth() === new Date().getMonth() &&
    actualDate.getFullYear() === new Date().getFullYear()
      ) ? actualDate.getDate() + 100 : actualDate.getDate()

    calendar[weekOfMonth].push(printDay)

    actualDate.setDate(actualDate.getDate() + 1)

    if (actualDate.getDay() === 1) {
      weekOfMonth++
      calendar[weekOfMonth] = []
    }
  }

  for (let i = 7, j = calendar[weekOfMonth].length; i > j; i--) {
    calendar[weekOfMonth].push(' ')
  }

  return (
    <tbody>
      {calendar.map((week, index) => (
        <tr key={index}>
          {week.map((day, index) => ((day > 100) ? <td key={index} className='today'> {day - 100}</td> : <td key={index}>{day}</td>))}
        </tr>
      ))}
    </tbody>
  )
}

export default DaysMonths
