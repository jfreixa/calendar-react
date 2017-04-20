import React from 'react'
import './index.scss'
import daysWeek from '../../data/daysWeek'
const DaysWeek = () => (
  <div className='dayContainer'>
    {daysWeek.map((day) => <div className='day daysWeek' key={day}>{day}</div>)}
  </div>
)
export default DaysWeek
