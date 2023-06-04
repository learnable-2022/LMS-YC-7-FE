import React, { useState } from 'react'
import './Navbar.scss'
// import 'animate.css'
import Logo from '../../assets/Logo-sprout.png'
import NavigateButton from '../NavigateButton/NavigateButton'
import ToggleButton from '../ToggleButton/ToggleButton'
import Modal from '../Modal/Modal'
import teach from '../../assets/teach-logo.png'
import studt from '../../assets/studt-logo.png'
import parent from '../../assets/parent-logo.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openMobileNav, setOpenMobileNav] = useState(false)

  function handleOpen(){
    setOpenModal(!openModal)
  }
  
  function openMobile(){
    setOpenMobileNav(!openMobileNav)
  }

  return (
    <div id='navbar'>
      <nav>
        <img src={Logo} alt="" />

        <Link to='about' smooth={true} duration={500} spy={true} className='link'>About</Link>
        <Link to='contact' smooth={true} duration={500} spy={true} className='link'>Contact Us</Link>

        <aside>
          <NavigateButton link={'/login'} title={'Log in'} id={"nav-btn"}/>
          <ToggleButton onClick={handleOpen} text={"Register"} className={"reg-btn"}/>
        </aside>
      </nav>

      <menu>
        <img src={Logo} alt="" />

        <ToggleButton onClick={openMobile} className={`tog-btn`}>
          <i className={`fa-solid fa-${openMobileNav ? 'times' : 'bars'} fa-2x`}></i>
        </ToggleButton>

        {openMobileNav && (
          <div className={`mobile ${openMobileNav ? 'active' : ''}`}>
            <Link to='about' smooth={true} duration={500} spy={true} className='link'>About</Link>
            <Link to='contact' smooth={true} duration={500} spy={true} className='link'>Contact Us</Link>
            <NavigateButton link={'/login'} title={'Log in'} id={"nav-btn"}/>
            <ToggleButton onClick={handleOpen} text={"Register"} className={"reg-btn"}/>
          </div>
        )}
      </menu>

      {openModal && (
        <Modal className={"modal-content"} closeModal={handleOpen}>
          <h1>REGISTER AS...</h1>

          <div id='content-container'>
            <div id="content">
              <img src={teach} alt="" />
              <NavigateButton link={'/register/teacher'} id={'nav-tog'} title={"TEACHER"}/>
            </div>
            <div id="content">
              <img src={studt} alt="" />
              <NavigateButton link={'/register/student'} id={'nav-tog'} title={"STUDENT"}/>
            </div>
            <div id="content">
              <img src={parent} alt="" />
              <NavigateButton link={'/register/parent'} id={'nav-tog'} title={"PARENT"}/>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Navbar;
