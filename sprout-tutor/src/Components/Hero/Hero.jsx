import React, { useState } from 'react'
import './Hero.scss'
import teach from '../../assets/teach-logo.png'
import studt from '../../assets/studt-logo.png'
import underline from '../../assets/underline.png'
import child from '../../assets/child.png'
import pointer from '../../assets/pointer.png'
import heroframe from '../../assets/heroframe.png'
import NavigateButton from '../NavigateButton/NavigateButton'
import Modal from '../Modal/Modal'
import ToggleButton from '../ToggleButton/ToggleButton'
import HeroProfile from '../HeroProfile/HeroProfile'

const Hero = () => {
  const [openModal, setOpenModal] = useState(false)

  function handleOpen(){
    setOpenModal(!openModal)
  }

  return (
    <div id='hero'>
        <div id="hero-left">

          <span>
            <h1>
              Interactive
              Learning
              <img src={underline} alt={"underline"} />
              For Young Children
            </h1>
          </span>

          <p>
            Ignite your child’s curiosity with our interactive <br />
            Learning Management System (LMS). Explore engaging courses, <br />
            fun games, and interactive activities that make learning a <br />
            delightful adventure
          </p>

          <ToggleButton text={"Get Started"} className={"hr-btn"} onClick={handleOpen}/>

          <img src={pointer} alt="" id='hero-pointer' />
          
          <img src={heroframe} alt="" id='hero-frame' />
        </div>
        
        <img src={child} alt="" id="hero-child" />


        {/* <HeroProfile /> */}

      {openModal && (
        <Modal className={"modal-content"} closeModal={handleOpen}>
          <h1>REGISTER AS</h1>

          <div id='content-container'>
            <div id="content">
              <img src={teach} alt="" />
              <NavigateButton link={'/register/teacher'} title={"TEACHER"}/>
            </div>
            <div id="content">
            <img src={studt} alt="" />
              <NavigateButton link={'/register/student'} title={"STUDENT"}/>
            </div>
            {/* <div id="content">
            <img src={parent} alt="" />
              <NavigateButton link={'/register/parent'} title={"PARENT"}/>
            </div> */}
          </div>
        </Modal>
    )}
    </div>
  )
}

export default Hero