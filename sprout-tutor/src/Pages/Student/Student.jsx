import React from 'react'
import './Student.scss'
import StudentTopNav from '../../Components/StudentComponents/StudentTopNav/StudentTopNav'
import StudentManager from '../../Components/StudentComponents/StudentManager/StudentManager'

const Student = () => {
  return (
    <div id='student'>
        <StudentTopNav />

        <StudentManager />
    </div>
  )
}

export default Student