import React from 'react'
const DaysWeek = ({days}) => (
  <thead>
    <tr>
      {days.map((day, index) => <th key={index}>{day}</th>)}
    </tr>
  </thead>
)
export default DaysWeek
