import React, { PropTypes } from 'react'
import './index.scss'
import ArrowLeft from 'react-mdi/icons/arrow-left'
import ArrowRight from 'react-mdi/icons/arrow-right'

const ChangeMonth = ({handleNextDate, handlePreviousDate, month, year}) => (
  <div className='changeMonth'>
    <button onClick={handlePreviousDate} className='arrow'>
      <ArrowLeft size={20} fill='white' tintColor='white' />
    </button>
    <div id='actualDate'>
      {month} {year}
    </div>
    <button onClick={handleNextDate} className='arrow'>
      <ArrowRight size={20} />
    </button>
  </div>
)

ChangeMonth.propTypes = {
  handlePreviousDate: PropTypes.func.isRequired,  
  handleNextDate: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}

export default ChangeMonth
