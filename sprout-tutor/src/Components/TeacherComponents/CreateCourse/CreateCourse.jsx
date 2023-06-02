import React, { useState } from 'react';
import './CreateCourse.scss';
import ToggleButton from '../../ToggleButton/ToggleButton';
import Step1 from './Step1';
import Step2 from './Step2';
import Modal from '../../Modal/Modal';

const CreateCourse = ({ cancelCourse }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openModal, setOpenModal] = useState(0);

  function handlePop() {
    setOpenModal(!openModal)
  }

  function handleNextStep() {
    setActiveIndex(activeIndex + 1);
  }

  return (
    <div id='create-course'>
      <h1>Create New Course</h1>

      <nav>
        <ToggleButton
          text={'STEP 1'}
          className={`cr-link ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => setActiveIndex(0)}
        />
        <ToggleButton
          text={'STEP 2'}
          className={`cr-link ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => setActiveIndex(1)}
        />
        <ToggleButton
          text={'STEP 3'}
          className={`cr-link ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => setActiveIndex(2)}
        />
      </nav>

      <div id='cr-course-content'>
        {activeIndex === 0 && (
            <Step1 onNext={handleNextStep}/>
        )}
        {activeIndex === 1 && (
            <Step2 />
        )}
        <ToggleButton text={'Cancel'} onClick={handlePop} className={'cl-btn cancel-btn'}/>
      </div>



        {openModal && (
            <Modal closeModal={handlePop} className={'content-modal'}>
                <p>Are you sure you want to Cancel your course creation?</p>
                <div id="truth-box">
                    <ToggleButton text={"Yes"} onClick={cancelCourse} className={'cancel-btn'}/>
                    <ToggleButton text={"No"} onClick={handlePop} className={'no-btn'}/>
                </div>
            </Modal>
        )}
    </div>
  );
};

export default CreateCourse;
