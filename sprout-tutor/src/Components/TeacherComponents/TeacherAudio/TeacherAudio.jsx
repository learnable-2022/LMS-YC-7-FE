import React, {useState, useRef} from 'react'

const TeacherAudio = () => {
  const [audios, setAudios] = useState(null);
  const inputRef = useRef(null);

  function handleAudioClick(index) {
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
    setAudios(event.dataTransfer.file)
  };

if (audios) return (
    <div>

    </div>
)

  function handleAudioClick() {
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
            <h1>Audio file</h1>
            {!audios && (
                <div id='thumbnail-drop-area'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleAudioClick}
                >
                    <h1> Drop Audio file here or click to upload</h1>
                
                <input
                type='file'
                multiple
                accept='audio/*'
                style={{ display: 'none' }}
                ref={inputRef}
                onChange={(event) => setAudios(event.target.audios)}
            />
                </div>
            )}       
      </span>
     
    </div>
  )
}

export default TeacherAudio