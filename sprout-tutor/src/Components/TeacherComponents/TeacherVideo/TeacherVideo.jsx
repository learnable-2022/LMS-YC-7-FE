import React, {useState, useRef} from 'react'
import './TeacherVideo.scss'
import ToggleButton from '../../ToggleButton/ToggleButton';


const TeacherVideo = () => {
  const [video, setVideo] = useState(null);
  const inputRef = useRef(null);

  function handleVideoClick(index) {
    if (index) {
    setActiveIndex(index);
    } else {
    setActiveIndex(0);
    }
}

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setVideo(event.dataTransfer.file)
  };

if (video) return (
    <div>

    </div>
)

  function handleVideoClick() {
    inputRef.current.click();
};

  return (
    <div>
      <label htmlFor='title'>
        <h1>Lesson Title</h1>
          <input type='text' name='text' id='title' placeholder='Untitled Lesson' />
      </label>

      <label htmlFor='description'>
          <h1>Course Description</h1>
          <textarea name='text' id='description' placeholder='What is the Lesson about'></textarea>
      </label>

      <span>
            <h1>Video file</h1>
            {!video && (
                <div id='thumbnail-drop-area'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleVideoClick}
                >
                    <h1> Drop Video  file here or click to upload</h1>
                
                <input
                type='file'
                multiple
                accept='video/*'
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={(event) => setVideo(event.target.video)}
            />
                </div>
            )}       
      </span>
     
    </div>
  )
}


export default TeacherVideo





