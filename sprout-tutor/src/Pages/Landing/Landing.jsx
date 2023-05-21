import React from 'react'
import './Landing.scss'
import Button from '../../Components/Button/Button'

const Landing = () => {
  return (
    <div id='landing'>
        Landing

        <Button title={"Test"} id={'btn'} link={'/about'}/>
    </div>
  )
}

export default Landing