import React from 'react'
import './Pricing.scss'
import basic from '../../assets/basic.png'
import standard from '../../assets/standard.png'
import premium from '../../assets/premium.png'
import NavigateButton from '../NavigateButton/NavigateButton'

const Pricing = () => {
  return (
    <div id='pricing'>
        <h1>
            Our Pricing
        </h1>

        <p>
            Choose the perfect plan that fits your needs and unlock the full potential of our LMS at an affordable price. Experience seamless course management, engaging content, and personalized support, all designed to enhance your teaching and learning journey.
        </p>

        <div id="prc-img">
            <NavigateButton image={basic} link={"/signup"} id={"prc-btn"}/>
            <NavigateButton image={standard} link={"/signup"} id={"prc-btn"}/>
            <NavigateButton image={premium} link={"/signup"} id={"prc-btn"}/>
        </div>
    </div>
  )
}

export default Pricing