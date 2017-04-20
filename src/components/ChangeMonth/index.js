import React from 'react'
import { func, object } from 'prop-types'

import './index.scss'
import months from '../../data/months'

import ArrowLeft from 'react-mdi/icons/arrow-left'
import ArrowRight from 'react-mdi/icons/arrow-right'

const ChangeMonth = ({handleDateUp, handleDateDown, date}) => (
  <div className='changeMonth'>
    <button onClick={handleDateDown} className='arrow'>
      <ArrowLeft size={20} />
    </button>
    <div id='actualDate'>
      {months[date.getMonth()]} {date.getFullYear()}
    </div>
    <button onClick={handleDateUp} className='arrow'>
      <ArrowRight size={20} />
    </button>
  </div>
)

ChangeMonth.propTypes = {
  handleDateUp: func.isRequired,
  handleDateDown: func.isRequired,
  date: object.isRequired
}

export default ChangeMonth
