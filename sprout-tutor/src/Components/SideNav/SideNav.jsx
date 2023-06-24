import React, { useState } from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom';
import content from '../../../Data/SideNavComponents.json';
import ToggleButton from '../ToggleButton/ToggleButton';

const SideNav = ({ setActiveLink }) => {
  // const [expand, setExpand] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleLinkClick(index) {
    setActiveLink(index);
    setActiveIndex(index);
  }

  function onMobileClick(){
    setOpenMobile(!openMobile)
  }

  return (
    <div id='sidenav' className={`sidenav`}>
      <div id="sd-nav-desk">
          <div id='sd-links'>
            {content.map((item, index) => (
              <Link
              to={item.link}
                key={index}
                className={`sd-link ${index === activeIndex ? 'linked' : ''}`}
                onClick={() => handleLinkClick(index)}
              >
                <i className={item.icon}></i>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>

      <div id="sd-nav-mobile">
        <ToggleButton onClick={onMobileClick} className={'mobile-btn'} >
              <i className={`fa-solid fa-${openMobile ? 'times' : 'bars'} fa-2x`}></i>
        </ToggleButton>
        {openMobile && (
            <div id='sd-links'>
              {content.map((item, index) => (
                <Link
                to={item.link}
                key={index}
                className={`sd-link ${index === activeIndex ? 'linked' : ''}`}
                onClick={() => handleLinkClick(index)}
                >
                  <i className={item.icon}></i>
                  <p>{item.text}</p>

                </Link>
              ))}
            </div>
          )}
        </div>
    </div>
  );
};

export default SideNav;
