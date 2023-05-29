import React, { useEffect, useRef } from 'react';
import './OfferSlide.scss';
import slide from '../../../Data/OfferSlide.json';

const OfferSlide = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideRef.current.style.transform = `translateX(-100px)`;

      setTimeout(() => {
        slideRef.current.style.transform = '';
      }, 1000);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id='of-slide' className="offer-slide">
      {slide.map((item, index) => (
        <div className='slide-item' key={index}>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default OfferSlide;
