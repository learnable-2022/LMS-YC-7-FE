import React, { useState } from 'react'
import './TeacherProfile.scss'
import upload from '../../../assets/upload-one.png'
import ToggleButton from '../../ToggleButton/ToggleButton'
import TeacherGeneral from '../TeacherGeneral/TeacherGeneral'

const TeacherProfile = () => {
    const [openPop, setOpenPop] = useState(false)
    function handleClick(){
        setOpenPop(!openPop)
    }

  return (
    <div id='teach-profile'>
        <section>
            <ToggleButton image={upload} text={'Edit Profile'} onClick={handleClick} className={'teach-p-btn'}/>

            <div id="teach-progress-panel">
                <span>
                    <h4>PUBLISHER</h4>
                    <div className="progress">

                    </div>
                </span>
                <span>
                    <h4>AVE. RATING</h4>
                    <div className="progress">

                    </div>
                </span>
                <span>
                    <h4>AVE. VIEWS</h4>
                    <div className="progress">

                    </div>
                </span>
            </div>
        </section>
        <aside></aside>

        {openPop && <TeacherGeneral closePop={handleClick} /> }
    </div>
  )
}

export default TeacherProfile