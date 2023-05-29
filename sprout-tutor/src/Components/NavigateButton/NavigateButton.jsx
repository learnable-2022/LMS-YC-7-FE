import React from 'react'
import './NavigateButton.scss'
import { useNavigate } from 'react-router-dom'

const NavigateButton = ({id, title, link,image}) => {
    const navigate = useNavigate()

    function handleClick(){
        navigate(link)
    }
    
  return (
    <button type='button' onClick={handleClick} id={id} className='btn'>
        {title}
        <img src={image} alt="" />
    </button>
  )
}

export default NavigateButton