import React, {useState, useRef} from 'react'
import './TeacherVideo.scss'
import ToggleButton from '../../ToggleButton/ToggleButton';


const TeacherVideo = (onNext) => {
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


function handleInputChange(e) {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
  handleFile(file);
  } else {
  console.log('Please select a video file.');
  }
}
  function handleVideoClick() {
    inputRef.current.click();
};


function handleSave() {
  
  onNext();
}


  return (
    <div>
      <label className='tv-title'>
        <h1>Lesson Title</h1>
          <input type='text' name='text' id='title' placeholder='Untitled Lesson' />
      </label>

      <label className='tv-description'>
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
                  {video ? (
                <video src={video}  alt='Lesson video' />
                 ) : (
                <span>Drop Video  file here or click to upload</span>
                 )}
                
                <input
                type='file'
                multiple
                accept='video/*'
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={handleInputChange}
            />
                </div>
            )}       
      </span>
      <div>
        <span id='st1-submit'>
          <button className={'st1-btn st1-cont'} onClick={handleSave} >Continue</button>
        </span>
      </div>
    </div>
  )
}


export default TeacherVideo





