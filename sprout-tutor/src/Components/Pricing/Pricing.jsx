import React, { useState } from 'react'
import './Pricing.scss'
import basic from '../../assets/basic.png'
import standard from '../../assets/standard.png'
import premium from '../../assets/premium.png'
import teach from '../../assets/teach-logo.png'
import studt from '../../assets/studt-logo.png'
import parent from '../../assets/teach-logo.png'
import ToggleButton from '../ToggleButton/ToggleButton'
import NavigateButton from '../NavigateButton/NavigateButton'
import Modal from '../Modal/Modal'

const Pricing = () => {
  const [openModal, setOpenModal] = useState(false)

  function handleClick(){
    setOpenModal(!openModal)
  }

  return (
    <div id='pricing'>
        <h1>
            Our Pricing
        </h1>

        <p>
            Choose the perfect plan that fits your needs and unlock the full potential of our LMS at an affordable price. Experience seamless course management, engaging content, and personalized support, all designed to enhance your teaching and learning journey.
        </p>

        <div id="prc-img">
            <ToggleButton image={basic} className={"prc-btn"} onClick={handleClick}/>
            <ToggleButton image={standard} className={"prc-btn"} onClick={handleClick}/>
            <ToggleButton image={premium} className={"prc-btn"} onClick={handleClick}/>
        </div>

      {openModal && (
        <Modal className={"modal-content"} closeModal={handleClick}>
          <h1>REGISTER AS</h1>

          <div id='content-container'>
            <div id="content">
              <img src={teach} alt="" />
              <NavigateButton link={'/register/teacher'} id={'nav-tog'} title={"TEACHER"}/>
            </div>
            <div id="content">
            <img src={studt} alt="" />
              <NavigateButton link={'/register/student'} id={'nav-tog'} title={"STUDENT"}/>
            </div>
            {/* <div id="content">
            <img src={parent} alt="" />
              <NavigateButton link={'/register/parent'} id={'nav-tog'} title={"PARENT"}/>
            </div> */}
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Pricing