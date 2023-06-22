import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ReactPlayer from 'react-player';
import './TeacherVideo.scss'

const TeacherVideo = () => {
  const [videoFiles, setVideoFiles] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
 

  const handleFileDrop = (acceptedFiles) => {
    setVideoFiles([...videoFiles, ...acceptedFiles]);
  };

  const handleTitleChange = (event) => {
    setLessonTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setLessonDescription(event.target.value);
  };

  const handleSave = () => {
    const lessonData = {
      videoFiles,
      lessonTitle,
      lessonDescription,
    };
    // Handle save logic here
    alert('Lesson saved successfully.');
    // Redirect to teacher's dashboard or any other desired page
    history.push('/teacher-dashboard');
  };



  return (
    <div>
      <label>
        <h2>Lesson Title</h2>
          <input type="text"  name='text' placeholder="Untitled Title" value={lessonTitle} onChange={handleTitleChange} />
      </label>

      <label>
          <h2>Lesson Description</h2>
          <textarea name='text' id='description' placeholder="What is the Lesson about" value={lessonDescription} onChange={handleDescriptionChange} />
      </label>

      <Dropzone onDrop={handleFileDrop} accept="video/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            style={{ border: '1px dashed black', padding: '20px', marginBottom: '20px', cursor: 'pointer' }}
            onClick={() => {
              const fileInput = document.querySelector('input[type="file"]');
              fileInput.click();
            }}
          >
            <input {...getInputProps()} />
            <p>Drag and drop video files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {videoFiles.map((file, index) => (
        <div key={index}>
          <ReactPlayer url={URL.createObjectURL(file)} controls />
        </div>
      ))}
      <div>
        <button onClick={handleSave}>Publish</button>
      </div>

    </div>
  );
};
export default TeacherVideo;





