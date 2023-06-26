import React, { useEffect, useRef } from 'react';
import './OfferSlide.scss';
import slide from '../../../Data/OfferSlide.json';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const OfferSlide = () => {

  return (
    <Slide>
      <div id='of-slide' className="offer-slide">
              {slide.map((item, index) => (
                <div className='slide-item' key={index}>
                  <img src={item.image} alt="" />
                </div>
              ))}
      </div>
    </Slide>
  );
};

export default OfferSlide;
