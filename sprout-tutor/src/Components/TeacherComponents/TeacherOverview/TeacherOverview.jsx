import React from 'react';
import './TeacherOverview.scss';
import TeacherSettings from '../TeacherSettings/TeacherSettings';
import CourseManager from '../CourseManager/CourseManager';
import TeacherProfile from '../TeacherProfile/TeacherProfile';
import TeacherOverviewContainer from '../TeacherOverviewContainer/TeacherOverviewContainer';

const TeacherOverview = ({ activeLink, onShowCreateCourse }) => {

  const getComponent = (linkId) => {
    switch (linkId) {
      case 0:
        return <TeacherOverviewContainer />;

      case 1:
        return <TeacherProfile createCourseClick={onShowCreateCourse} />;

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
      {getComponent(activeLink)}
    </div>
  );
};

export default TeacherOverview;
