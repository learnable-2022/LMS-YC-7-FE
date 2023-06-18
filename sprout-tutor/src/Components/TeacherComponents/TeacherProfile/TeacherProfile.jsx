import React, { useState } from 'react';
import './TeacherProfile.scss';
import pen from '../../../assets/edit.png';
import ToggleButton from '../../ToggleButton/ToggleButton';
import TeacherGeneral from '../TeacherGeneral/TeacherGeneral';
import TeacherCourse from './TeacherCourse/TeacherCourse';
import TeacherDisplay from './TeacherDisplay/TeacherDisplay';

const TeacherProfile = ({ createCourseClick }) => {
  const [openPop, setOpenPop] = useState(false);

  const handleClick = () => {
    setOpenPop(!openPop);
  };

  const handleCreateCourseClick = () => {
    createCourseClick();
  };

  return (
    <div id='teach-profile'>
      <section>
        <ToggleButton
          image={pen}
          text={'Edit Profile'}
          onClick={handleClick}
          className={'teach-p-btn'}
        />

        <div id='teach-progress-panel'>
          <span>
            <h4>PUBLISHED</h4>
            <div className='progress'></div>
          </span>
          <span>
            <h4>AVE. RATING</h4>
            <div className='progress'></div>
          </span>
          <span>
            <h4>AVE. VIEWS</h4>
            <div className='progress'></div>
          </span>
        </div>

        <TeacherDisplay />

        <TeacherCourse
          createCourseClick={handleCreateCourseClick}
          showCreateCourse={openPop}
        />
      </section>
      <aside>
        <div className="aside side-disp-one">
            <h2>Top Courses</h2>

            <span></span>
        </div>
        <div className="aside side-disp-two">
            <h2>Top Students Location</h2>
            <span></span>
        </div>
      </aside>

      {openPop && <TeacherGeneral closePop={handleClick} />}
    </div>
  );
};

export default TeacherProfile;
