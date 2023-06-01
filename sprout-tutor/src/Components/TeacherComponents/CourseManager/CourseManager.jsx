import React from 'react'
import './CourseManager.scss'
import TeacherOverview from '../TeacherOverview/TeacherOverview'
import TeacherSettings from '../TeacherSettings/TeacherSettings';

const CourseManager = ( {activeLink} ) => {

    const getComponent = (linkId) => {

        switch(linkId) {
            case 0:
            return <TeacherOverview />;

            case 6:
            return <TeacherSettings />

            default:
            return null;
        }
    };
    console.log(activeLink)
    
  return (
    <div id='c-manager'>
        {getComponent(activeLink)}
    </div>
  )
}

export default CourseManager