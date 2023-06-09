import React, { useState } from 'react'
import './StudentTopNav.scss'
import NavigateButton from '../../NavigateButton/NavigateButton'
import logo from '../../../assets/Logo-sprout.png'
import ToggleButton from '../../ToggleButton/ToggleButton'
import NotificationPanel from '../../NotificationPanel/NotificationPanel'
import blank from '../../../assets/blank.webp'
import StudentSideNav from '../StudentSideNav/StudentSideNav'


const StudentTopNav = ({ uploadedImage, setActiveLink, title, text }) => {
    const [openNavPanel, setOpenNavPanel] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenNavPanel = (index) => {
        setOpenNavPanel(index);
    };

    function handleOpenMenu() {
        setOpenMenu(!openMenu)
    }

  return (
    <div id='st-topnav'>
        <div id="st-top">
            <NavigateButton link={'/'} image={logo} id={'std-logo'} />

            <span>
                <label htmlFor="search">
                    <input type="search" name="search" id="search" placeholder='Search here'/>
                    <button type="submit"><i className='fa-solid fa-magnifying-glass fa-2x'></i></button>
                </label>

                <p>My Dashboard</p>
            </span>

            <nav>
                <ToggleButton onClick={() => setOpenNavPanel(1)} className={'st-btn st-upload'} image={null}>
                    <i class="fa-solid fa-arrow-up-from-bracket fa-2x"></i>            
                </ToggleButton>
                <ToggleButton onClick={() => setOpenNavPanel(2)} className={'st-btn st-notif'} image={null}>
                    <i className='fa-solid fa-bell fa-2x'></i>
                </ToggleButton>

                <img src={uploadedImage || blank} alt="" id="disp-img" />
            </nav>

            <ToggleButton className={'st-btn st-menu-btn'} onClick={handleOpenMenu}>
                <i className='fa-solid fa-ellipsis-vertical fa-2x'></i>
            </ToggleButton>
        </div>

        <div id="st-bottom">
            <h5>{title}</h5>
            <p>{text}</p>
        </div>

        {openMenu && (
            <StudentSideNav closenav={handleOpenMenu} setActiveLink={setActiveLink} />
        )}

        {openNavPanel === 1 && 
            <NotificationPanel 
                closePanel={handleOpenNavPanel}
                title={'Uploaded Information'}
                text={'Your Uploaded information'}
            />
        }

        {openNavPanel === 2 && 
            <NotificationPanel 
                closePanel={handleOpenNavPanel}
                title={'Notifications'}
                text={'Your Notifications'}
            />
        }
    </div>
  )
}

export default StudentTopNav