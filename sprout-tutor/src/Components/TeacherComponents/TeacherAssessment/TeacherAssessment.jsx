import React, { useState } from 'react';

const TeacherAssessment = () => {
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [timer, setTimer] = useState(0);

  const handleTitleChange = (event) => {
    setLessonTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setLessonDescription(event.target.value);
  };

  const handleQuestionChange = (event, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleTimerChange = (event) => {
    setTimer(event.target.value);
  };

  const handleSave = () => {
    // Handle save logic here
    alert('Assessment saved successfully.');
    // Redirect to teacher's dashboard
  };

  const handlePreview = () => {
    // Handle preview logic here
  };

  const handlePublish = () => {
    // Handle publish logic here
  };

  return (
    <div>
      <div><h1>Upload Assessment</h1></div>
      <div><input type="text" placeholder="Lesson Title" value={lessonTitle} onChange={handleTitleChange} /></div>
      <div><textarea placeholder="Lesson Description" value={lessonDescription} onChange={handleDescriptionChange} /></div>
      {questions.map((question, index) => (
        <div key={index}>
          <h4>Question {index + 1}:</h4>
          <input type="text" value={question} onChange={(e) => handleQuestionChange(e, index)} />
        </div>
      ))}
      <div><button onClick={handleAddQuestion}>Add Question</button></div>
      <div><input type="number" placeholder="Timer (in seconds)" value={timer} onChange={handleTimerChange} /></div>
      
      <button onClick={handleSave}>Save</button>
      <button onClick={handlePreview}>Continue to Publish</button>
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};
export default TeacherAssessment;