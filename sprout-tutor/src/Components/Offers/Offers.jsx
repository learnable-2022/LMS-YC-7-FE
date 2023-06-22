import React from 'react'
import './Offers.scss'
import OfferSlide from '../Slides/OfferSlide/OfferSlide'
import heading from '../../assets/heading.png'


const Offers = () => {
  return (
    <div id='offers'>
      <img src={heading} alt="" className="heading" />
        <h1>What we offer at Sprout Tutor</h1>
        <OfferSlide />
    </div>
  )
}

export default Offers