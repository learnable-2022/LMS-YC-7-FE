import React from 'react'
import './CreateCourse.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'

const Step2 = () => {
  return (
    <div className='cr-container act-two'>
        <h1>Add Lessons</h1>
        <p>Add various forms of content to your course and make changes to already existing courses.</p>

        <div className="st2-container">
            <aside>
                <ToggleButton text={"Add Lesson"} className={'st2-btn'}/>
            </aside>

            <section>
                <form action="">
                    <label htmlFor="video">Video</label>
                    <input type="radio" name="video" id="video" />

                    <label htmlFor="audio">Audio</label>
                    <input type="radio" name="audio" id="audio" />
                    
                    <label htmlFor="text">Text</label>
                    <input type="radio" name="text" id="text" />

                    <label htmlFor="assessment">Assessment</label>
                    <input type="radio" name="assessment" id="assessment" />
                </form>
            </section>
        </div>
    </div>
  )
}

export default Step2