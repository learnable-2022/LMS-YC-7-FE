import React, { useState } from "react";
import Dropzone from "react-dropzone";
import ReactAudioPlayer from "react-audio-player";

const TeacherAudio = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");

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

    <div>
      <label>
        <h1>Lesson Title</h1>
        <input
          type="text"
          name="text"
          placeholder="Untitled Title"
          value={lessonTitle}
          onChange={handleTitleChange}
        />
      </label>

      <label>
        <h1>Course Description</h1>
        <textarea
          name="text"
          id="description"
          placeholder="What is the Lesson about"
          value={lessonDescription}
          onChange={handleDescriptionChange}
        />
      </label>

      <Dropzone onDrop={handleFileDrop} accept="audio/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            style={{
              border: "1px dashed black",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <input {...getInputProps()} />
            <p>Drag and drop audio files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {audioFiles.map((file, index) => (
        <div key={index}>
          <ReactAudioPlayer src={URL.createObjectURL(file)} controls />
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
