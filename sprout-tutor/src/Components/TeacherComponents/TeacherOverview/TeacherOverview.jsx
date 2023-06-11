import React from 'react';
import './TeacherOverview.scss';
import TeacherSettings from '../TeacherSettings/TeacherSettings';
import CourseManager from '../CourseManager/CourseManager';
import TeacherProfile from '../TeacherProfile/TeacherProfile';
// import ToggleButton from '../../ToggleButton/ToggleButton';

const TeacherOverview = ({ activeLink, onShowCreateCourse }) => {
  const getComponent = (linkId) => {
    switch (linkId) {

      case 1:
        return <TeacherProfile />

      case 2:
        return <CourseManager />;

      case 6:
        return <TeacherSettings />;

      default:
        return null;
    }
  };

  return (
    <div id='t-overview'>
      {/* <ToggleButton text={"Create Course"} onClick={onShowCreateCourse} /> */}
      {getComponent(activeLink)}
    </div>
  );
};

export default TeacherOverview;
