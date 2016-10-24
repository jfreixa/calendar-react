import React, { PropTypes } from 'react'
import './index.scss'
import ArrowLeft from 'react-mdi/icons/arrow-left'
import ArrowRight from 'react-mdi/icons/arrow-right'
const ChangeMonth = ({handleDate, month}) => (
  <div>
    <button onClick={handleDate} className='arrow prev'>
      <ArrowLeft size={20} className='prev' />
    </button>
    <div id='actualDate'>
      {month}
    </div>
    <button onClick={handleDate} className='arrow next'>
      <ArrowRight size={20} className='next' />
    </button>
  </div>
)
ChangeMonth.propTypes = {
  handleDate: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired
}
export default ChangeMonth
