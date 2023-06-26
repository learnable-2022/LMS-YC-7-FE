import React, { useState } from 'react';
import './TeacherAssessment.scss';

const TeacherAssessment = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('Question 1');
  const [options, setOptions] = useState(['', '', '', '']);
  const [isMultipleChoice, setIsMultipleChoice] = useState(true);
  const [timer, setTimer] = useState('');

  const handleAddQuestion = () => {
    const newQuestionNumber = questions.length + 1;
    setQuestions([...questions, { title: `Question ${newQuestionNumber}`, question, options }]);
    setQuestion(`Question ${newQuestionNumber + 1}`);
    setOptions(['', '', '', '']);
  };

  const handleToggleQuestionType = () => {
    setIsMultipleChoice(!isMultipleChoice);
  };

  const handleSavePublish = () => {
    // Perform save/publish functionality here
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="teacher-assessment">
      <div>
        <h2>Assessment</h2>
        <div className="question-wrapper">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="text-input"
          ></textarea>
        </div>
        {isMultipleChoice ? (
          <div>
            <h3>Options:</h3>
            <div className="options-wrapper">
              {options.map((option, index) => (
                <div key={index} className="option-item">
                  <label htmlFor={`option${index}`}>{`Option ${String.fromCharCode(65 + index)}:`}</label>
                  <input
                    id={`option${index}`}
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="text-input"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3>Essay</h3>
            <p>Allow the teacher to input essay-specific details here</p>
          </div>
        )}
        <button onClick={handleToggleQuestionType} className="toggle-button">
          Switch to {isMultipleChoice ? 'Essay' : 'Multiple Choice'}
        </button>
        <button onClick={handleAddQuestion} className="add-question-button">
          Add Question
        </button>
        <div className="timer-wrapper">
          <label htmlFor="timer">Timer (in minutes):</label>
          <input
            id="timer"
            type="number"
            min="0"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
            className="text-input"
          />
        </div>
        <button onClick={handleSavePublish} className="save-publish-button">
          Save/Publish
        </button>
      </div>
      <div className="preview">
        <h2>Preview</h2>
        {questions.map((q) => (
          <div key={q.title}>
            <h3>{q.title}</h3>
            <p>{q.question}</p>
            <div className="options-preview">
              {q.options.map((option, index) => (
                <div key={index} className="option-preview">
                  {`${String.fromCharCode(65 + index)}. ${option}`}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherAssessment;
