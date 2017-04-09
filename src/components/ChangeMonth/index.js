import React from 'react'
import { func, number } from 'prop-types'
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
  handleDateUp: func.isRequired,
  handleDateDown: func.isRequired,
  month: number.isRequired,
  year: number.isRequired
}

export default ChangeMonth
