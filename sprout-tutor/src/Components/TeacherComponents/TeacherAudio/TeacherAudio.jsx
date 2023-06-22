import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ReactAudioPlayer from 'react-audio-player';
import './TeacherAudio.scss';

const TeacherAudio = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');

  const handleFileDrop = (acceptedFiles) => {
    setAudioFiles([...audioFiles, ...acceptedFiles]);
  };

  const handleTitleChange = (event) => {
    setLessonTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setLessonDescription(event.target.value);
  };

  const handlePublish = () => {
    // Handle publish logic here
    const lessonData = {
      audioFiles,
      lessonTitle,
      lessonDescription,
    };
    // Handle save logic here
    alert('Lesson saved successfully.');
    // Redirect to teacher's dashboard
  };

  return (
    <div className="teacher-audio">
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
        <h2>Audio File</h2>
      </span>
      <div>
        <Dropzone  className="dropZone" onDrop={handleFileDrop} accept="audio/*" multiple>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="dropZoneContent"
            >
              <input {...getInputProps()} />
              <p>Drag and drop audio files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <div className="preview">
          {audioFiles.map((file, index) => (
            <div key={index}>
              <ReactAudioPlayer src={URL.createObjectURL(file)} controls />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="publishButton" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
};

export default TeacherAudio;
