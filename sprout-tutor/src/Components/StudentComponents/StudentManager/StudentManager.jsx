import React, {useState} from 'react'
import './StudentManager.scss'
import StudentSideNav from '../StudentSideNav/StudentSideNav'
import StudentDisplay from '../StudentDisplay/StudentDisplay'

const StudentManager = () => {
    const [activeLink, setActiveLink] = useState(0);

  return (
    <div id='st-manager'>
        {/* <StudentSideNav setActiveLink={setActiveLink}/> */}

        {/* <StudentDisplay activeLink={activeLink}/> */}
    </div>
  )
}

export default StudentManager