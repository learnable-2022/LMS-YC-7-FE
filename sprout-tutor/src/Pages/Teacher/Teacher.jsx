import React, { useState } from 'react';
import './Teacher.scss';
import TopNav from '../../Components/TopNav/TopNav';
import TeacherContent from '../../Components/TeacherComponents/TeacherContent/TeacherContent';

const Teacher = () => {
  const [showCreateCourse, setShowCreateCourse] = useState(false);

  const handleCreateCourseClick = () => {
    setShowCreateCourse(true);
  };

  return (
    <div id='teacher'>
        <TopNav createCourseClick={handleCreateCourseClick} showCreateCourse={showCreateCourse} />
        <TeacherContent showCreateCourse={showCreateCourse} setShowCreateCourse={setShowCreateCourse}/>
    </div>
  );
};

export default Teacher;