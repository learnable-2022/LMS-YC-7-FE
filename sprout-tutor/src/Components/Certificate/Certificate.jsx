import React, {useState} from 'react'
import './Certificate.scss'
import certificate from '../../assets/certifciate.png'
import teach from '../../assets/teach-logo.png'
import studt from '../../assets/studt-logo.png'
import parent from '../../assets/parent-logo.png'
import ToggleButton from '../ToggleButton/ToggleButton'
import NavigateButton from '../NavigateButton/NavigateButton'
import Modal from '../Modal/Modal'

const Certificate = () => {
  const [openModal, setOpenModal] = useState(false)

  function handleOpen(){
    setOpenModal(!openModal)
  }
  return (
    <div id='certificate'> 
        <img src={certificate} alt="" />

        <div className="text">
            <h1>Secure Your Certificate On The Chain</h1>
            <p>
                With our advanced technology, your achievements are immutably recorded, providing lifelong proof of your accomplishments. Whether it's a course completion certificate, academic credential, or skill mastery, our blockchain-powered system ensures tamper-proof verification, enabling you to confidently showcase your qualifications to employers, universities, and the world. Take control of your credentials and pave the way for a future of endless opportunities
            </p>

            <ToggleButton link={"/signup"} text={"Get Started"} className={"cert-btn"} onClick={handleOpen}/>
        </div>

      {openModal && (
        <Modal className={"modal-content"} closeModal={handleOpen}>
          <h1>REGISTER AS...</h1>

          <div id='content-container'>
            <div id="content">
              <img src={teach} alt="" />
              <NavigateButton link={'/register/teacher'} title={"TEACHER"}/>
            </div>
            <div id="content">
            <img src={studt} alt="" />
              <NavigateButton link={'/register/student'} title={"STUDENT"}/>
            </div>
            <div id="content">
            <img src={parent} alt="" />
              <NavigateButton link={'/register/parent'} title={"PARENT"}/>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Certificate