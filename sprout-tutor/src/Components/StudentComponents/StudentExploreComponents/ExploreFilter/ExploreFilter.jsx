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
        <ToggleButton onClick={handleVisibility} className={`filter-btn ${toggleVisibility ? 'active' : ''}`}>
            <i className={`fa-solid fa-${toggleVisibility ? 'chevron-left' : 'chevron-right'} fa-2x`}></i>
        </ToggleButton> 

        {!toggleVisibility && (
            <div id="filter-content" className={`filter-content ${toggleVisibility ? 'active' : ''}`}>
                <span>
                    <label htmlFor="filter"></label>

                    <select name="filter" id="filter">
                        <option value="popularity">Popularity</option>
                        <option value="rated">Top Rated</option>
                        <option value="uploaded">Recently Uploaded</option>
                    </select>
                </span>
            </div>
        )}
    </div>
  )
}

export default ExploreFilter