import React from 'react'
import './Modal.scss'
import ToggleButton from '../ToggleButton/ToggleButton'
import x from '../../assets/x.png'

const Modal = ({closeModal, children, className}) => {
  return (
    <div id='modal'>
        <div id='modal-content' className={className}>
            <ToggleButton 
                onClick={closeModal}
                className={"tg-btn"}
                text={"X"}
            />

            {children}
        </div>
    </div>
  )
}

export default Modal