import React, { useState } from 'react'
import './StudentProfile.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'
import edit from '../../../assets/edit.png'
import StudentGeneral from '../StudentGeneral/StudentGeneral'
import STProfilleAbout from './STProfileAbout/STProfilleAbout'
import STCourses from './STCourses/STCourses'
import STCoursesCompleted from './STCoursesCompleted/STCoursesCompleted'
import StudentSuggestions from './StudentSuggestions/StudentSuggestions'

const StudentProfile = () => {
    const [openPop, setOpenPop] = useState(false)

    function handlePopOpen() {
        setOpenPop(!openPop)
    }

  return (
    <div id='st-profile'>
        
        <section>
            <ToggleButton text={'Edit Profile'} image={edit} className={'st-edit'} onClick={handlePopOpen}/>

            <div id="st-progress-panel">
                <span>
                    <h4>My Courses</h4>
                    <div className="progress">

                    </div>
                </span>
                <span>
                    <h4>Total Points</h4>
                    <div className="progress">

                    </div>
                </span>
                <span>
                    <h4>Certifications</h4>
                    <div className="progress">

                    </div>
                </span>
            </div>

            <STProfilleAbout />

            <STCourses />

            <STCoursesCompleted />

        </section>

        <aside>
            <StudentSuggestions />
        </aside>

        {openPop && <StudentGeneral closePop={handlePopOpen} />}
    </div>
  )
}

export default StudentProfile