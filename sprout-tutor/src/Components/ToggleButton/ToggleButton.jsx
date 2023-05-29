import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ( {onClick, children, text, image, className} ) => {
  return (
    <button type='button' id='toggle' onClick={onClick} className={className}>
        {children}
        {text}
        <img src={image} alt="" />
    </button>
  )
}

export default ToggleButton