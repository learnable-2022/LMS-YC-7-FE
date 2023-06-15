import React, { useState } from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom';
import content from '../../Data/SideNavComponents.json';
import ToggleButton from '../ToggleButton/ToggleButton';

const SideNav = ({ setActiveLink }) => {
  const [expand, setExpand] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleExpand() {
    setExpand(!expand);
  }

  function handleLinkClick(index) {
    setActiveLink(index);
    setActiveIndex(index);
  }

  return (
    <div id='sidenav' className={`sidenav ${expand ? 'active' : ''}`}>
      <div id='sd-links'>
        {content.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`sd-link ${index === activeIndex ? 'linked' : ''}`}
            onClick={() => handleLinkClick(index)}
          >
            <i className={item.icon}></i>
            {expand && <p>{item.text}</p>}
          </Link>
        ))}
      </div>

      <ToggleButton onClick={handleExpand} className={'exp-btn'}>
        <i className={`fa-solid fa-${expand ? 'compress' : 'expand'} fa-2x`}></i>
      </ToggleButton>
    </div>
  );
};

export default SideNav;
