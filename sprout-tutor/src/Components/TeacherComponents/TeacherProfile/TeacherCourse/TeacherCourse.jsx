import React from 'react'
import './TeacherCourse.scss'
import upload from '../../../../assets/upload-one.png'
import ToggleButton from '../../../ToggleButton/ToggleButton'

const TeacherCourse = ({ createCourseClick, showCreateCourse }) => {

    function handleCreateCourseClick() {
        createCourseClick();
    }

  return (
    <div id='teach-course'>
        <h2>Published Courses</h2>

        <ToggleButton text={"Create Course"} image={upload} className={"upload"} onClick={handleCreateCourseClick} isActive={showCreateCourse} />
    </div>
  )
}

export default TeacherCourse
