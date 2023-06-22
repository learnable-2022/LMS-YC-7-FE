import React, { useState } from 'react';
import './TeacherAssessment.scss'

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
    <div>
      <div>
        <h2> Assessment</h2>
        <div>
          <label htmlFor="question">Question: </label>
          <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
        </div>
        {isMultipleChoice ? (
          <div>
            <h3>Options:</h3>
            {options.map((option, index) => (
              <div key={index}>
                <label htmlFor={`option${index}`}>{`Option ${String.fromCharCode(65 + index)}: `}</label>
                <input
                  id={`option${index}`}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3>Essay</h3>
            <p>Allow the teacher to input essay-specific details here</p>
          </div>
        )}
        <button onClick={handleToggleQuestionType}>
          Switch to {isMultipleChoice ? 'Essay' : 'Multiple Choice'}
        </button>
        <button onClick={handleAddQuestion}>Add Question</button>
        <div>
          <label htmlFor="timer">Timer (in minutes): </label>
          <input
            id="timer"
            type="number"
            min="0"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
          />
        </div>
        <button onClick={handleSavePublish}>Save/Publish</button>
      </div>
      <div>
        <h2>Preview</h2>
        {questions.map((q) => (
          <div key={q.title}>
            <h3>{q.title}</h3>
            <p>{q.question}</p>
            {q.options.map((option, index) => (
              <div key={index}>{`${String.fromCharCode(65 + index)}. ${option}`}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherAssessment;