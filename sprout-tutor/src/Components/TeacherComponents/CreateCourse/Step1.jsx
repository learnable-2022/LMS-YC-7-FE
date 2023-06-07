import React, {useState, useRef} from 'react'
import './CreateCourse.scss'
import ToggleButton from '../../ToggleButton/ToggleButton';
import right from '../../../assets/right.png'

const Step1 = ({onNext}) => {
    const [thumbnail, setThumbnail] = useState(null);
    const fileInputRef = useRef(null);

    function handleThumbnailClick(index) {
        if (index) {
        setActiveIndex(index);
        } else {
        setActiveIndex(0);
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    }

    function handleFile(file) {
        if (file && file.size <= 200 * 1024) {
        const reader = new FileReader();
        reader.onload = function (e) {
            setThumbnail(e.target.result);
        };
        reader.readAsDataURL(file);
        } else {
            alert("File greater than 200kb")
        }
    }

    function handleFileInputChange(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
        handleFile(file);
        } else {
        console.log('Please select an image file.');
        }
    }

    function handleThumbnailClick() {
        fileInputRef.current.click();
    }

    function handleSave() {
        // Perform any necessary save operations
        onNext(); // Call the onNext callback to navigate to the next step
    }

  return (
    <div className='cr-container act-one'>
        
        <h1>Course Details</h1>

        <label htmlFor='title'>
            <h2>Course Title</h2>
            <input type='text' name='text' id='title' placeholder='Untitled Course' />
        </label>

        <label htmlFor='description'>
            <h2>Course Description</h2>
            <textarea name='text' id='description' placeholder='What is the course about'></textarea>
        </label>

        <label htmlFor='grade'>
            <h2>Audience Grade</h2>
        </label>

        <select name='grade' id='grade'>
            <option value='Select'>Select Grade</option>
            <option value='Primary 1'>Primary 1</option>
            <option value='Primary 2'>Primary 2</option>
            <option value='Primary 3'>Primary 3</option>
            <option value='Primary 4'>Primary 4</option>
            <option value='Primary 5'>Primary 5</option>
            <option value='Primary 6'>Primary 6</option>
            <option value='JSS 1'>JSS 1</option>
            <option value='JSS 2'>JSS 2</option>
            <option value='JSS 3'>JSS 3</option>
            <option value='SSS 1'>SSS 1</option>
            <option value='SSS 2'>SSS 2</option>
            <option value='SSS 3'>SSS 3</option>
        </select>

        <span>
            <h1>Other Information</h1>

            <div
            id='thumbnail-drop-area'
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleThumbnailClick}
            >
            {thumbnail ? (
                <img src={thumbnail} alt='Thumbnail' />
            ) : (
                <span>Drag and drop an image (less than 200KB) or click to select</span>
            )}
            <input
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
            />
            </div>
        </span>

        <label htmlFor="price">
            <h2>Price</h2>
            <input type="text" name="price" id="price" placeholder='Amount' />
            <i className='fa-solid fa-dollar-sign'></i>
        </label>

        <span id='st1-submit'>
            <ToggleButton text={"Save"} className={'st1-btn st1-save'}/>
            <ToggleButton text={"Continue"} onClick={handleSave} image={right} className={'st1-btn st1-cont'}/>
        </span>
    </div>
  )
}

export default Step1