import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

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
    <div>
      <label>
        <h2>Lesson Title</h2>
          <input type="text"  name='text' placeholder="Untitled Title" value={lessonTitle} onChange={handleTitleChange} />
      </label>

      <label>
          <h2>Lesson Description (add a link here)</h2>
          <textarea name='text' id='description' placeholder="What is the Lesson about" value={lessonDescription} onChange={handleDescriptionChange} />

      </label>

      <span>
        <h2>Text File</h2>
      </span>
      <div>
        <Dropzone onDrop={handleFileDrop} multiple>
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
            <p>Drag and drop document files here, or click to select files</p>
          </div>
        )}
        </Dropzone>
        {documentFiles.map((file, index) => (
          <div key={index}>
            <p>{file.name}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSave}>Publish</button>
    </div>
  );
};

export default TeacherText;