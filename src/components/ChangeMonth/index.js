import React from 'react'
const ChangeMonth = ({handleDate, month}) => (
  <div>
    <button onClick={handleDate} className='arrow' data-month='prev'>
      prev
    </button>
    <div id='actualDate'>
      {month}
    </div>
    <button onClick={handleDate} className='arrow' data-month='next'>
      next
    </button>
  </div>
)
export default ChangeMonth
