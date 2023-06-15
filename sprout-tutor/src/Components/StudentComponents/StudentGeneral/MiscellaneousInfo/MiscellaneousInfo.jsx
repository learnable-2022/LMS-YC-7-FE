import React, {useState} from 'react'
import './MiscellaneousInfo.scss'

const MiscellaneousInfo = () => {
    const [charCount, setCharCount] = useState(0);

    const handleTextareaChange = (event) => {
    const text = event.target.value;
    const count = text.length;

    setCharCount(count);
    };

  return (
    <div id='oth-misc'>

        <div className='section'>
            <h1>Courses of Interest</h1>

            <span>
                <input type="search" name="search" id="search" placeholder='Search Courses' />
                <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass fa-2x'></i>
                </button>
            </span>
        </div>

        <div className='section'>
            <h1>Hobbies and Extracurricular activities</h1>

            <span>
                <input type="search" name="search" id="search" placeholder='Search Hobbies and Aspirations' />
                <button type='submit'>
                    <i className='fa-solid fa-magnifying-glass fa-2x'></i>
                </button>
            </span>
        </div>

        <div className='section'>
            <h1>Future Aspirations</h1>

            <span>
                <textarea name="aspirations" id="aspirations" placeholder='Tell us your future aspirations'  onChange={handleTextareaChange}></textarea>
                <small>{charCount}/200</small>
            </span>
        </div>
        
    </div>
  )
}

export default MiscellaneousInfo