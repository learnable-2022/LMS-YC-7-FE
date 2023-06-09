import React, { useState } from 'react'
import './StudentProfile.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'
import edit from '../../../assets/edit.png'
import StudentGeneral from '../StudentGeneral/StudentGeneral'
import STProfilleAbout from './STProfileAbout/STProfilleAbout'
import STCourses from './STCourses/STCourses'

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

        </section>

        <aside>
            <section>
                <h1>Recommended courses</h1>
            </section>
            <section>
                <h1>Top-Rated Teachers</h1>
            </section>
            <section>
                <h1>Recent Activity</h1>
            </section>
        </aside>

        {openPop && <StudentGeneral closePop={handlePopOpen} />}
    </div>
  )
}

export default StudentProfile