import React from 'react'
import './TestiProfile.scss'
import quote from '../../assets/quote.png'

const TestiProfile = ({image, text, name, className}) => {
  return (
    <div id='t-profile' className={className}>
        
        <figure>
            <span id='one'></span>
            <span id='two'></span>
            <span id='three'></span>
            <span id='four'></span>
            <span id='five'></span>
            <img src={image} alt="" />
        </figure>

        <aside>
            <img src={quote} alt="" />
            <p>{text}</p>
            <h4>{name}</h4>
        </aside>
    </div>
  )
}

export default TestiProfile