import React, { useState, useEffect } from 'react';
import './Testimonial.scss';
import testimonial from '../../Data/Testimonial.json';
import TestiProfile from './TestiProfile';
import ToggleButton from '../ToggleButton/ToggleButton';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonial.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonial.length) % testimonial.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonial.length);
  };

  return (
    <div id='testimonial'>
      <div className="t-content">
        <h1>What Our Customers Say</h1>
        <TestiProfile
          text={testimonial[currentSlide].text}
          name={testimonial[currentSlide].name}
          image={testimonial[currentSlide].image}
        />
      </div>

      <div className="t-button">
        <ToggleButton className='t-btn left' onClick={goToPreviousSlide}>
          <i className='fa-solid fa-chevron-left'></i>
        </ToggleButton>
        <ToggleButton className='t-btn right' onClick={goToNextSlide}>
          <i className='fa-solid fa-chevron-right'></i>
        </ToggleButton>
      </div>
    </div>
  );
};

export default Testimonial;
