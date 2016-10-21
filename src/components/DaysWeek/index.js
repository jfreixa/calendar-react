import React from 'react'
import './index.css'
import daysWeek from '../../data/daysWeek'
const DaysWeek = () => (
  <thead>
    <tr>
      {daysWeek.map((day, index) => <th key={index}>{day}</th>)}
    </tr>
  </thead>
)
export default DaysWeek
