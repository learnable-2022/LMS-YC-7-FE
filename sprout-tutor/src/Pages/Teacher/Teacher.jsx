import React from 'react'
import './Teacher.scss'
import TopNav from '../../Components/TopNav/TopNav'
import TeacherContent from '../../Components/TeacherComponents/TeacherContent/TeacherContent'

const Teacher = () => {
  return (
    <div id='teacher'>
        <TopNav />
        <TeacherContent />
    </div>
  )
}

export default Teacher