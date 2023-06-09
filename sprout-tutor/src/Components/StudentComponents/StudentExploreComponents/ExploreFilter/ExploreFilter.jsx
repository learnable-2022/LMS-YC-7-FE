import React, { useState } from 'react'
import './ExploreFilter.scss'
import ToggleButton from '../../../ToggleButton/ToggleButton'

const ExploreFilter = () => {
    const [toggleVisibility, setToggleVisibility] = useState(false)

    function handleVisibility(){
        setToggleVisibility(!toggleVisibility)
    }

  return (
    <div id='explore-filter'>
        <div id="filter-control">
            <ToggleButton onClick={handleVisibility} className={`filter-btn ${toggleVisibility ? 'active' : ''}`}>
                <i className={`fa-solid fa-${toggleVisibility ? 'chevron-right' : 'chevron-left'} fa-2x`}></i>
            </ToggleButton>
        </div>

        {toggleVisibility && (
            <div id="filter-content">
                thigs
            </div>
        )}
    </div>
  )
}

export default ExploreFilter