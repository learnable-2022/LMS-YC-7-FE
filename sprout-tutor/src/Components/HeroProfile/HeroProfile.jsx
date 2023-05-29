import React from 'react'
import './HeroProfiles.scss'
import pr1 from '../../assets/pr1.png'
import pr2 from '../../assets/pr2.png'
import pr3 from '../../assets/pr3.png'

const HeroProfile = ({className}) => {
  return (
    <div id='hr-p' className={className}>
        <img src={pr1} alt="" className='img one'/>

        <img src={pr2} alt=""  className='img two'/>
        
        <img src={pr3} alt="" className='img three'/>
    </div>
  )
}

export default HeroProfile