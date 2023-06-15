import React, { useState } from 'react'
import './Student.scss'
import StudentTopNav from '../../Components/StudentComponents/StudentTopNav/StudentTopNav'
import StudentDisplay from '../../Components/StudentComponents/StudentDisplay/StudentDisplay'

const Student = () => {
  const [activeLink, setActiveLink] = useState(0)
  return (
    <div id='student'>
        <StudentTopNav setActiveLink={setActiveLink} />

        <StudentDisplay activeLink={activeLink} />

    </div>
  )
}

export default Student