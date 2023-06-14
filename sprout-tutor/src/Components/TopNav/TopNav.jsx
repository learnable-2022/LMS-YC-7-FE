import React, { useState } from 'react';
import './TopNav.scss';
import logo from '../../assets/Logo-sprout.png';
import ToggleButton from '../ToggleButton/ToggleButton';
import NotificationPanel from '../NotificationPanel/NotificationPanel';
import blank from '../../assets/blank.webp';
import NavigateButton from '../NavigateButton/NavigateButton';

const TopNav = () => {
  const [openMessage, setOpenMessage] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  function handleMessageOpen() {
    setOpenMessage(!openMessage);
  }

  function handleNotificationOpen() {
    setOpenNotification(!openNotification);
  }

  return (
    <div id='topnav'>
      <NavigateButton image={logo} id={"logo"} link={"/"}/>

      <label htmlFor="">
        <input type="search" name="search" id="search" placeholder='Search here' />
        <button type='submit' id='tv-sb-btn'><i className='fa-solid fa-magnifying-glass fa-2x'></i></button>
      </label>

      <div id="userprofile">
        <ToggleButton className={'user messages'} onClick={handleMessageOpen}>
          <i className='fa-regular fa-envelope fa-2x'></i>
        </ToggleButton>

        <ToggleButton className={'user notif'} onClick={handleNotificationOpen}>
          <i className='fa-regular fa-bell fa-2x'></i>
        </ToggleButton>

        <div id='teach-prof'>
          <span>
            <h5></h5> <br />
            <p>Teacher</p>
          </span>

          <img src={blank} alt={""} id='disp-img'/>
        </div>

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
          closePanel={handleNotificationOpen}
          className={'panel notif-panel'}
          title={"Your Notifications"}
          text={"Manage Your Notifications"}
        >
          <p>No Notifications</p>
        </NotificationPanel>
      )}

    </div>
  );
};

export default TopNav;
