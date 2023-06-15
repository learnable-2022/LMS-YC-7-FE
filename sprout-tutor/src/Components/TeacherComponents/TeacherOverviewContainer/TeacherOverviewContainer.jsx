import React from 'react'
import './TeacherOverviewContainer.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'
import SectionOne from './SectionOne/SectionOne'
import CourseStatus from './CourseStatus/CourseStatus'

const TeacherOverviewContainer = () => {
  return (
    <div id='t-over-container'>
        <div id="teach-analysis">
            <div id="analysis-content">
                <section>
                    <div id="analysis-nav">
                        <span>
                            <h2>Revenue</h2>

                            <p id='caret'>
                                <i className='fa-solid fa-caret-up'></i>
                                <i className='fa-solid fa-caret-down'></i>
                            </p>
                        </span>

                        <menu>
                            <p>Course visit <div className="circle visit"></div></p>
                            <p>Course sale <div className="circle sales"></div></p>

                            <select name="calendar" id="calendar">
                                <option value="month">This Month</option>
                                <option value="week">This Week</option>
                                <option value="year">This Year</option>
                            </select>
                        </menu>
                    </div>
                </section>
                <aside>
                    <h2>Top Students Location</h2>

                    <ToggleButton text={'Add Student'} className={'add-std'}>
                        <i className='fa-solid fa-plus'></i>
                    </ToggleButton>
                </aside>
            </div>

            <div id="analysis-overlay">
                <div id="a-overlay-display">
                    <span>
                        <h2>Total Revenue</h2>
                        <p>$</p>
                    </span>

                    <i className='fa-solid fa-briefcase'></i>
                </div>
                <div id="a-overlay-display">
                    <span>
                        <h2>Total Students</h2>
                        <p>0</p>
                    </span>

                    <i className='fa-solid fa-users'></i>
                </div>
                <div id="a-overlay-display">
                    <span>
                        <h2>Average Rating</h2>
                        <p>No ratings yet</p>
                    </span>

                    <i className='fa-solid fa-star'></i>
                </div>
            </div>

            <SectionOne />

            <CourseStatus />
        </div>
    </div>
  )
}

export default TeacherOverviewContainer