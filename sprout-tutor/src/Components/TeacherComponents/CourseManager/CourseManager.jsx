import React from 'react';
import './CourseManager.scss';
import TeacherOverview from '../TeacherOverview/TeacherOverview';
import TeacherSettings from '../TeacherSettings/TeacherSettings';
// import ToggleButton from '../../ToggleButton/ToggleButton';

const CourseManager = ({ activeLink, onShowCreateCourse }) => {
  const getComponent = (linkId) => {
    switch (linkId) {

      case 2:
        return <TeacherOverview />;

      case 6:
        return <TeacherSettings />;

      default:
        return null;
    }
  };

  return (
    <div id='c-manager'>
      {/* <ToggleButton text={"Create Course"} onClick={onShowCreateCourse} /> */}
      {getComponent(activeLink)}
    </div>
  );
};

export default CourseManager;
