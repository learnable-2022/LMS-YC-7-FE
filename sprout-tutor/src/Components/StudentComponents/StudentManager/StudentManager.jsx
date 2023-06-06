import React, {useState} from 'react'
import './StudentManager.scss'
import SideNav from '../../SideNav/SideNav'
import StudentDisplay from '../StudentDisplay/StudentDisplay'

const StudentManager = () => {
    const [activeLink, setActiveLink] = useState(0);

  return (
    <div id='st-manager'>
        <SideNav setActiveLink={setActiveLink}/>

        <StudentDisplay activeLink={activeLink}/>
    </div>
  )
}

export default StudentManager