import React from 'react'
import './Certificate.scss'
import certificate from '../../assets/certifciate.png'
import NavigateButton from '../NavigateButton/NavigateButton'

const Certificate = () => {
  return (
    <div id='certificate'> 
        <img src={certificate} alt="" />

        <div className="text">
            <h1>Secure Your Certificate On The Chain</h1>
            <p>
                With our advanced technology, your achievements are immutably recorded, providing lifelong proof of your accomplishments. Whether it's a course completion certificate, academic credential, or skill mastery, our blockchain-powered system ensures tamper-proof verification, enabling you to confidently showcase your qualifications to employers, universities, and the world. Take control of your credentials and pave the way for a future of endless opportunities
            </p>

            <NavigateButton link={"/signup"} title={"Get Started"} id={"cert-btn"}/>
        </div>
    </div>
  )
}

export default Certificate