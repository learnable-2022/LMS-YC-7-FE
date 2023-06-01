import React, { useState } from 'react';
import './TeacherContent.scss';
import SideNav from '../../SideNav/SideNav';
import CourseManager from '../CourseManager/CourseManager';

const TeacherContent = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div id='t-content'>
      <SideNav setActiveLink={setActiveLink} />
      <CourseManager activeLink={activeLink} />
    </div>
  );
};

export default TeacherContent;
