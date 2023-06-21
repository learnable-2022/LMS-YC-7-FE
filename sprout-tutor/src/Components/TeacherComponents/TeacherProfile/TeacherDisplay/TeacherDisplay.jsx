import React from 'react'
import './TeacherDisplay.scss'
import blank from '../../../../assets/blank.webp'

const TeacherDisplay = () => {
  return (
    <div id='teach-display'>
        <figure>
            <img src={blank} alt="" />

            <figcaption>
                <h2></h2>
                <p></p>
            </figcaption>
        </figure>

        <aside>
            <span>
                <h2>About Me</h2>
                <div className="update t-abt-update">
                    <p>
                        Click on the "Edit Profile" button to add an about me
                    </p>
                </div>
            </span>
            <span>
                <h2>Skills</h2>
                <div className="update t-skl-update">
                    <p>
                        Click on the "Edit Profile" button to add your skills
                    </p>
                </div>
            </span>
        </aside>
    </div>
  )
}

export default TeacherDisplay