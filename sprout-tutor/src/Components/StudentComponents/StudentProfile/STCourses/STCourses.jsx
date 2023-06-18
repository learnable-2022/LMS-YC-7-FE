import React from 'react'
import './STCourses.scss'
import ToggleButton from '../../../ToggleButton/ToggleButton'
import upload from '../../../../assets/upload-one.png'

const STCourses = () => {
  return (
    <div id='st-courses'>
        <h4>My Courses</h4>

        <section>

        </section>

        <ToggleButton image={upload} text={'Add Course'} className={'stc-btn'}/>
    </div>
  )
}

export default STCourses