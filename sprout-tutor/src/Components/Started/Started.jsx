import React from 'react'
import './Started.scss'
import NavigateButton from '../NavigateButton/NavigateButton'
import started from '../../assets/started-img.png'

const Started = () => {
  return (
    <div id='started'>
        <div className="str-text">
            <h1>Getting Started? We’ve got you covered</h1>

            <p>
                Embark on a journey of discovery of discovery and knowledge with our user-friendly learning management system.
            </p>

            <NavigateButton to={"/signup"} title={"Get Started"} id={"str-btn"} />
        </div>

        <img src={started} alt="" />
    </div>
  )
}

export default Started