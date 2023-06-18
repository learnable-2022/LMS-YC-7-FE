import React, { useState, useEffect, useRef } from 'react';
import './CreateCourse.scss';
import ToggleButton from '../../ToggleButton/ToggleButton';
import TeacherText from '../TeacherText/TeacherText';
import TeacherAudio from '../TeacherAudio/TeacherAudio';
import TeacherVideo from '../TeacherVideo/TeacherVideo';
import TeacherAssessment from '../TeacherAssessment/TeacherAssessment';

const Step2 = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const formRef = useRef(null);
  const [displayComponent, setDisplayComponent] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);


  function handleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  function handleClickOutside(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setSelectedOption('');
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  
    if (selectedOption === 'video') {
      setDisplayComponent(<TeacherVideo />);
    } else if (selectedOption === 'audio') {
      setDisplayComponent(<TeacherAudio />);
    } else if (selectedOption === 'text') {
      setDisplayComponent(<TeacherText />);
    } else if (selectedOption === 'assessment') {
      setDisplayComponent(<TeacherAssessment />);
    }
  
    setSubmitClicked(true);
    setDisplayForm(false);
  }
  

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="cr-container act-two">
      <h1>Add Lessons</h1>
      <p>Add various forms of content to your course and make changes to already existing courses.</p>
  
      <div className="st2-container">
        <aside>
          <ToggleButton text={'Add Lesson'} onClick={handleFormDisplay} className={'st2-btn'} />
        </aside>
  
        {displayForm && (
          <form onSubmit={handleFormSubmit} >
            <section ref={formRef}>
                <span>
                    <input type="radio" name="lessonType" id="video" value="video" onChange={handleOptionChange} />
                    <label htmlFor="video">Video</label>
                </span>
    
                <span>
                    <input type="radio" name="lessonType" id="audio" value="audio" onChange={handleOptionChange} />
                    <label htmlFor="audio">Audio</label>
                </span>
    
                <span>
                    <input type="radio" name="lessonType" id="text" value="text" onChange={handleOptionChange} />
                    <label htmlFor="text">Text</label>
                </span>
    
                <span>
                    <input
                        type="radio"
                        name="lessonType"
                        id="assessment"
                        value="assessment"
                        onChange={handleOptionChange}
                        />
                    <label htmlFor="assessment">Assessment</label>
                </span>
  
                {selectedOption && (
                    <input type="submit" value="Continue" id="submit" />
                )}
            </section>
          </form>
        )}
  
        {submitClicked && (
        <div id="attr-display">
            {displayComponent}
        </div>
        )}
      </div>
    </div>
  );  
};

export default Step2;