import React, { PropTypes } from 'react'
import './index.scss'
import months from '../../data/months'
import ArrowLeft from 'react-mdi/icons/arrow-left'
import ArrowRight from 'react-mdi/icons/arrow-right'

const ChangeMonth = ({handleDateUp, handleDateDown, month, year}) => (
  <div className='changeMonth'>
    <button onClick={handleDateDown} className='arrow'>
      <ArrowLeft size={20} />
    </button>
    <div id='actualDate'>
      {months[month]} {year}
    </div>
    <button onClick={handleDateUp} className='arrow'>
      <ArrowRight size={20} />
    </button>
  </div>
)

ChangeMonth.propTypes = {
  handleDateUp: PropTypes.func.isRequired,
  handleDateDown: PropTypes.func.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
}

export default ChangeMonth
