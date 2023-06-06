import React, { useState } from 'react'
import './StudentTopNav.scss'
import NavigateButton from '../../NavigateButton/NavigateButton'
import logo from '../../../assets/Logo-sprout.png'
import ToggleButton from '../../ToggleButton/ToggleButton'
import NotificationPanel from '../../NotificationPanel/NotificationPanel'

const StudentTopNav = () => {
    const [openNavPanel, setOpenNavPanel] = useState(0)

    function handleOpenNavPanel(index) {
        if(index){
            setOpenNavPanel(index)
        } else{
            setOpenNavPanel(0)
        }
    }

  return (
    <div id='st-topnav'>
        <NavigateButton link={'/'} image={logo} id={'std-logo'} />

        <span>
            <p>My Profile</p>

            <label htmlFor="search">
                <input type="search" name="search" id="search" placeholder='Search here'/>
                <button type="submit"><i className='fa-solid fa-magnifying-glass fa-2x'></i></button>
            </label>
        </span>

        <nav>
            <ToggleButton onClick={() => setOpenNavPanel(1)} className={'st-btn st-upload'}>
                <i class="fa-solid fa-arrow-up-from-bracket fa-2x"></i>            
            </ToggleButton>
            <ToggleButton onClick={() => setOpenNavPanel(2)} className={'st-btn st-notif'}>
                <i className='fa-solid fa-bell fa-2x'></i>
            </ToggleButton>
        </nav>

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