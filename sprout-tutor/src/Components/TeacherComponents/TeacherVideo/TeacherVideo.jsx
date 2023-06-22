import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ReactPlayer from 'react-player';
import './TeacherVideo.scss';

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
    // Redirect to teacher's dashboard
  };

  return (
    <div className="teacher-video">
      <label className="label">
        <h2>Lesson Title</h2>
        <input
          type="text"
          name="text"
          placeholder="Untitled Title"
          value={lessonTitle}
          onChange={handleTitleChange}
        />
      </label>

      <label className="label">
        <h2>Lesson Description</h2>
        <textarea
          type="text"
          name="text"
          id="description"
          placeholder="What is the Lesson about"
          value={lessonDescription}
          onChange={handleDescriptionChange}
        />
      </label>

      <span>
        <h2>Video File</h2>
      </span>
      <div >
        <Dropzone className="dropZone" onDrop={handleFileDrop} accept="video/*" multiple>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="dropZoneContent"
              onClick={() => {
                const fileInput = document.querySelector('input[type="file"]');
                fileInput.click();
              }}
            >
              <input {...getInputProps()} />
              <p>Drop video files here, or click to select files</p>
            </div>
        )}
        </Dropzone>
        <div className='preview'>
          {videoFiles.map((file, index) => (
            <div key={index}>
              <ReactPlayer url={URL.createObjectURL(file)} controls />
            </div>
          ))}
        </div>

      </div>
      <div>
        <button className="publishButton" onClick={handleSave}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default TeacherVideo;
