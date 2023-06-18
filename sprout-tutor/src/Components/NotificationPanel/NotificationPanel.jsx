import React from 'react'
import './NotificationPanel.scss'
// import 'animate.css'

const NotificationPanel = ( {className, title, text, children, closePanel} ) => {
  return (
    <div id='panel' className={className}>

        <div id="panel-content" className={`animate__animated ${closePanel ? 'animate__zoomIn' : 'animate__zoomOut'}`}>

            <span id='panel-head'>
                <p>{title}</p>
                <button type='button' onClick={closePanel} id='panel-button'>
                    <i className='fa-solid fa-x fa-2x'></i>
                </button>
            </span>

            {children}

            <span id='manage'>
                {text}
            </span>

        </div>
    </div>
  )
}

export default NotificationPanel