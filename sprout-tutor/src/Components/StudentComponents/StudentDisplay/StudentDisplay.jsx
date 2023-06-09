import React from 'react'
import './StudentDisplay.scss'
import StudentProfile from '../StudentProfile/StudentProfile';

const StudentDisplay = ( {activeLink} ) => {

    function getComponent(linkId){
        switch(linkId){

            case 3:
            return <StudentProfile />

            default:
            return null
        }
    }

  return (
    <div id='st-display'>
        {getComponent(activeLink)}
    </div>
  )
}

export default StudentDisplay