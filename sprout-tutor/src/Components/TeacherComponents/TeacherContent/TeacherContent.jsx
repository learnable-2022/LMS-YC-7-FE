import React, { useState } from 'react';
import './TeacherContent.scss';
import SideNav from '../../SideNav/SideNav';
import CreateCourse from '../CreateCourse/CreateCourse';
import TeacherOverview from '../TeacherOverview/TeacherOverview';

const TeacherContent = ({showCreateCourse, setShowCreateCourse}) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleCancelCourseClick = () => {
    setShowCreateCourse(false);
  };

  return (
    <div id='t-content'>
      <SideNav setActiveLink={setActiveLink} />

      {showCreateCourse ? (
        <CreateCourse cancelCourse={handleCancelCourseClick}/>
      ) : (
        <TeacherOverview activeLink={activeLink} />
      )}
    </div>
  );
};

export default TeacherContent;
