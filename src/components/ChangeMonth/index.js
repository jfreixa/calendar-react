import React, { PropTypes } from 'react'
import './index.scss'
import ArrowLeft from 'react-mdi/icons/arrow-left'
import ArrowRight from 'react-mdi/icons/arrow-right'

const ChangeMonth = ({handleDate, month, year}) => (
  <div className='changeMonth'>
    <button onClick={handleDate} className='arrow prev'>
      <ArrowLeft size={20} fill='white' tintColor='white' className='prev' />
    </button>
    <div id='actualDate'>
      {month} {year}
    </div>
    <button onClick={handleDate} className='arrow next'>
      <ArrowRight size={20} className='next' />
    </button>
  </div>
)

ChangeMonth.propTypes = {
  handleDate: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}

export default ChangeMonth
