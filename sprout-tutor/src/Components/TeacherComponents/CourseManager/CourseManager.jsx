import React, { useState } from 'react'
import './CourseManager.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'
import TeacherSettings from '../TeacherSettings/TeacherSettings'
import Certificate from '../../Certificate/Certificate'
import Insight from '../Insight/Insight'

const CourseManager = () => {
    const [activeState, setActiveState] = useState(0)

    function handleClick (index) {
        if(index){
            setActiveState(index)
        }else{
            setActiveState(0)
        }
    }

  return (
    <div id='c-manager'>
        <h1>Course Manager</h1>

        <nav>
            <ToggleButton text={"Published"} className={`t-link ${activeState === 0 ? 'active' : ''}`} onClick={() => setActiveState(0)} />

            <ToggleButton text={"Drafts"} className={`t-link ${activeState === 1 ? 'active' : ''}`} onClick={() => setActiveState(1)} />
            
            <ToggleButton text={"Insights"} className={`t-link ${activeState === 2 ? 'active' : ''}`} onClick={() => setActiveState(2)} />
        </nav>

        {activeState === 0 &&<TeacherSettings />}
        {activeState === 1 && <Certificate />}
        {activeState === 2 && <Insight />}
    </div>
  )
}

export default CourseManager