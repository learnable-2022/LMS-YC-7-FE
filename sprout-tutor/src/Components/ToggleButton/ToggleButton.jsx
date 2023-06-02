import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ( {onClick, children, text, image, className, isActive} ) => {
  return (
    <button type='button' id='toggle' onClick={onClick} className={`toggle-button ${className} ${isActive ? 'active' : ''}`}>
        {children}
        {text}
        <img src={image} alt="" />
    </button>
  )
}

export default ToggleButton