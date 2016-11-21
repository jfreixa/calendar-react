import React from 'react'
import './index.scss'
const DaysWeek = ({daysWeek}) => (
  <div className='dayContainer'>
    {daysWeek.map((day, index) => <div className='day daysWeek' key={index}>{day}</div>)}
  </div>
)
export default DaysWeek
