import NavigateButton from '../NavigateButton/NavigateButton'
import './PreFooter.scss'

const PreFooter = () => {
  return (
    <div id='pre-footer'>
        <span>
            <h2>Teach the next generation of Great Minds</h2>
            <p>Create online course content for a continuous and interactive learning experience</p>
        </span>

        <NavigateButton title={'Teach on Sprout Tutor'} link={'/register/teacher'} id={'pre-btn'}/>
    </div>
  )
}

export default PreFooter