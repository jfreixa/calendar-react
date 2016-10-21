import React from 'react'
import './index.css'
import daysWeek from '../../data/daysWeek'
const DaysWeek = () => (
  <div>
    {daysWeek.map((day, index) => <div className='day' key={index}>{day}</div>)}
  </div>
)
export default DaysWeek
