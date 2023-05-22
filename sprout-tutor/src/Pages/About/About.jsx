import React from 'react'
import './About.scss'
import Button from '../../Components/Button/Button'

const About = () => {
  return (
    <div id='about'>
        About

        <Button link={'/login'} title={"Login"}/>
    </div>
  )
}

export default About