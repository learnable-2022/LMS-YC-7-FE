import React from 'react'
import './Button.scss'
import { useNavigate } from 'react-router-dom'

const Button = ({id, title, link}) => {
    const navigate = useNavigate()

    function handleClick(){
        navigate(link)
    }
  return (
    <button type='button' onClick={handleClick} id={id} className='btn'>
        {title}
    </button>
  )
}

export default Button