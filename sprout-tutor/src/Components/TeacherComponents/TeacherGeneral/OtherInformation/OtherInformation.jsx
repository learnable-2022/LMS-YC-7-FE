import React, { useState } from 'react'
import './OtherInformation.scss'

const OtherInformation = () => {
    const [charCount, setCharCount] = useState(0);

    const handleTextareaChange = (event) => {
    const text = event.target.value;
    const count = text.length;

    setCharCount(count);
    };

  return (
    <form action="" id='oth-info'>
        <h1>Other Information</h1>
        <section>
            <span>
                <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" placeholder='e.g 54 sprout road' />
            </span>
            <span>
                <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" placeholder='e.g Enugu' />
            </span>
            <span>
                <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" placeholder='e.g Nigeria' />
            </span>
            <span>
                <label htmlFor="twitter">Twitter</label>
                    <input type="url" name="twitter" id="twitter" placeholder='e.g twitter.com/simonoduse' />
            </span>
            <span>
                <label htmlFor="facebook">Facebook</label>
                    <input type="url" name="facebook" id="facebook" placeholder='e.g facebook.com/simonoduse' />
            </span>
            <span>
                <label htmlFor="linkedin">LinkedIn</label>
                    <input type="url" name="linkedin" id="linkedin" placeholder='e.g linkedin/in/simonoduse' />
            </span>
        </section>
        
        <span id='text-info'>
            <label htmlFor="about">About Me</label>
            <textarea name="about" id="about" placeholder='Tell us about you...' onChange={handleTextareaChange} ></textarea>
            <small>{charCount}/200</small>
        </span>
    </form>
  )
}

export default OtherInformation