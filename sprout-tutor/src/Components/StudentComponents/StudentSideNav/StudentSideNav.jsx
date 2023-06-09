import React from 'react'
import './StudentSideNav.scss'
import ToggleButton from '../../ToggleButton/ToggleButton'
import NavigateButton from '../../NavigateButton/NavigateButton'

const StudentSideNav = ({closenav, setActiveLink}) => {

  const handleSetActiveLink = (linkId) => {
    setActiveLink(linkId);
    closenav(); // Close the side navigation panel
  };

  return (
    <div id='st-sidenav'>
        <ToggleButton className={`st-side-btn st-close-btn ${closenav ? 'active' : ''}`} onClick={closenav}>
          <i className='fa-solid fa-x'></i>
        </ToggleButton>

        <div id="st-side-content">
          
          <div id="sdc-top">
            <img src={''} alt="" />
            <span>
              <h4></h4>
              <p></p>
            </span>
          </div>

          <span>
            <NavigateButton link={'/studentexplore'} title={'Explore'} id={'st-side-btn'}/>
          </span>

          <nav>
            <NavigateButton link={'/studentdashboard'} title={'Course Manager'} className={`st-side-btn`} />
            <ToggleButton text={'My Cart'} className={`st-side-btn`}/>
            <ToggleButton text={'Wishlist'} className={`st-side-btn`}/>
          </nav>

          <nav>
            <ToggleButton text={'My Profile'} className={`st-side-btn`} onClick={() => handleSetActiveLink(0)}/>
            <ToggleButton text={'Edit Profile'} className={`st-side-btn`}/>
            <ToggleButton text={'Wishlist'} className={`st-side-btn`}/>
          </nav>
        </div>

        <NavigateButton link={'/'} title={'LogOut'} id={'st-logout'} />
    </div>
  )
}

export default StudentSideNav