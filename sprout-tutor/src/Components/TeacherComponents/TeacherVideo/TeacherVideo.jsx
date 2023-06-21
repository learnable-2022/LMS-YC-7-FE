import React, { useState } from 'react';
import './TeacherVideo.scss'

const TeacherVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleTitleChange = (event) => {
    setLessonTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setLessonDescription(event.target.value);
  };

  const handlePreview = () => {
    // Handle preview logic here
  };

  const handlePublish = () => {
    // Handle publish logic here
  };

  return (
    <div>
      <h1>Upload Video Lesson</h1>
      <input type="text" placeholder="Lesson Title" value={lessonTitle} onChange={handleTitleChange} />
      <textarea placeholder="Lesson Description" value={lessonDescription} onChange={handleDescriptionChange} />
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handlePreview}>Preview</button>
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default TeacherVideo;





