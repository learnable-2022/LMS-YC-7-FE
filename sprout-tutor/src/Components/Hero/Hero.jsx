import React from 'react'
import './Hero.scss'
import ToggleButton from '../ToggleButton/ToggleButton'
import HeroProfile from '../HeroProfile/HeroProfile'

const Hero = () => {
  return (
    <div id='hero'>
        <h1>
            Interactive Learning for Kids
        </h1>
        <p>
            Ignite your child’s curiosity with our interactive Learning Management System (LMS). Explore engaging courses, fun games, and interactive activities that make learning a delightful adventure
        </p>

        <ToggleButton text={"Get Started"} className={"hr-btn"}/>

        <HeroProfile />
    </div>
  )
}

export default Hero