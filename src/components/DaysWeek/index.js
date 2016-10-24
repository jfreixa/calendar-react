import React from 'react'
import './index.scss'
import daysWeek from '../../data/daysWeek'
const DaysWeek = () => (
  <div className='dayContainer'>
    {daysWeek.map((day, index) => <div className='day daysWeek' key={index}>{day}</div>)}
  </div>
)
export default DaysWeek
