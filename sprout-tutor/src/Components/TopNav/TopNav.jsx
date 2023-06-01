import React, { useState } from 'react'
import './TopNav.scss'
import logo from '../../assets/Logo-sprout.png'
import ToggleButton from '../ToggleButton/ToggleButton'
import NotificationPanel from '../NotificationPanel/NotificationPanel'
import upload from '../../assets/upload-one.png'

const TopNav = () => {
  const [openMessage, setOpenMessage] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)

  function handleMessageOpen(){
    setOpenMessage(!openMessage)
  }

  function handleNotificaitonOpen(){
    setOpenNotification(!openNotification)
  }

  return (
    <div id='topnav'>
      <img src={logo} alt="" id='logo'/>

      <label htmlFor="">
        <input type="search" name="search" id="search" placeholder='Search here'/>
        <button type='submit' id='tv-sb-btn'><i className='fa-solid fa-magnifying-glass fa-2x'></i></button>
      </label>

      <div id="userprofile">
        <ToggleButton text={"Create Course"} image={upload} className={"upload"}/>

        <ToggleButton className={'user messages'} onClick={handleMessageOpen}>
          <i className='fa-solid fa-envelope fa-2x'></i>
        </ToggleButton>

        <ToggleButton className={'user notif'} onClick={handleNotificaitonOpen}>
          <i className='fa-solid fa-bell fa-2x'></i>
        </ToggleButton>

        <img src={""} alt={""} title={''}/>
      </div>

      {openMessage && (
        <NotificationPanel 
          closePanel={handleMessageOpen} 
          className={'panel message-panel'}
          title={"Your in Messages"}
          text={"Manage your Messages"}
        >
          <p>No messages</p>
        </NotificationPanel>
      )}

      {openNotification && (
        <NotificationPanel 
          closePanel={handleNotificaitonOpen}
          className={'panel notif-panel'}
          title={"Your Notifications"}
          text={"Manage Your Notifications"}
        >
          <p>No Notifications</p>
        </NotificationPanel>
      )}

    </div>
  )
}

export default TopNav