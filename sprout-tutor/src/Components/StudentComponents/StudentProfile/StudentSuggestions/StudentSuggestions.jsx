import React from 'react'
import './StudentSuggestions.scss'

const StudentSuggestions = () => {
  return (
    <div id='st-suggest'>
        <div className='sts-class sts-recommend'>
            <h1>Recommended courses</h1>
        </div>
        <div className='sts-class sts-rated'>
            <h1>Top-Rated Teachers</h1>
        </div>
        <div className='sts-class sts-activity'>
            <h1>Recent Activity</h1>
        </div>
    </div>
  )
}

export default StudentSuggestions