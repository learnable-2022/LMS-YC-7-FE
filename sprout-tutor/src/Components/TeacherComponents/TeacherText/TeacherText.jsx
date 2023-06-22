import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import './TeacherText.scss';

const TeacherText = () => {
  const [documentFiles, setDocumentFiles] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');

  const handleFileDrop = (acceptedFiles) => {
    setDocumentFiles([...documentFiles, ...acceptedFiles]);
  };

  const handleTitleChange = (event) => {
    setLessonTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setLessonDescription(event.target.value);
  };

  const handleSave = () => {
    // Handle save logic here
    alert('Lesson saved successfully.');
    // Reset form values
    setDocumentFiles([]);
    setLessonTitle('');
    setLessonDescription('');
  };

  return (
    <div className="teacher-text">
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
        <h2>Lesson Description (add a link here)</h2>
        <textarea
          name="text"
          id="description"
          placeholder="What is the Lesson about"
          value={lessonDescription}
          onChange={handleDescriptionChange}
        />
      </label>

      <span>
        <h2>Text File</h2>
      </span>
      <div >
        <Dropzone className="dropZone" onDrop={handleFileDrop} accept=".pdf, .txt, .doc, .docx" multiple>
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
              <p>Drop PDF or EPS file here or click to upload</p>
            </div>
          )}
        </Dropzone>
        <div className="preview">
          {documentFiles.map((file, index) => (
            <div key={index}>
              <p>{file.name}</p>
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

export default TeacherText;
