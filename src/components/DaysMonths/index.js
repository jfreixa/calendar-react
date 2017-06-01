import React, { PropTypes } from 'react'
import ReactTooltip from 'react-tooltip'
import './index.scss'

const DaysMonths = ({date, activeDays}) => {
  ReactTooltip.rebuild()

  let actualDate = new Date(date.getTime())
  actualDate.setDate(1)

  let actualMonth = actualDate.getMonth()
  let calendar = []

  let firstDayOfMonth = (actualDate.getDay() === 0) ? 7 : actualDate.getDay()

  for (let i = 1; i < firstDayOfMonth; i++) {
    calendar.push({'dayClass': 'no-day', 'number': null})
  }

  while (actualDate.getMonth() === actualMonth) {
    let dayClass = 'day'
    let classes = ''
    if (actualDate.getDay() === 1) {
      dayClass += ' clear'
    }
    if (actualDate.getDate() in activeDays) {
      dayClass += ' active'
      classes = activeDays[actualDate.getDate()].map(activeDay => {
        let color = activeDay.attendance ? 'inherit' :  'red';
        return `<p style="color: ${color}; margin: 0;">${activeDay.startTime} ${activeDay.name}</p>`
      }).join("")
    }

    calendar.push(
      {'dayClass': dayClass, 'number': actualDate.getDate(), classes})
    actualDate.setDate(actualDate.getDate() + 1)
  }

  if (actualDate.getDay() === 0) {
    for (let i = 7, j = calendar.length % 7; i > j; i--) {
      calendar.push({'dayClass': 'no-day', 'number': null})
    }
  }
  return (
    <div>
      <div className='dayContainer'>
        {calendar.map((day, index) => {
          return day.number !== null
            ? <div key={index} data-html={true} data-tip={day.classes} data-multiline={true}
                   className={day.dayClass}>{day.number}</div>
            : <div key={index} className={day.dayClass}></div>
        })}
      </div>
      <ReactTooltip data-multiline={true} place="top" effect='solid'
                    class='tooltipCalendar'/>
    </div>
  )
}
DaysMonths.propTypes = {
  date: PropTypes.object.isRequired,
}

export default DaysMonths
