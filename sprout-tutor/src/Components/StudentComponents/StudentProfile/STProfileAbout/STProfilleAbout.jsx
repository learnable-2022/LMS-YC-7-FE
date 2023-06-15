import React from 'react'
import './STProfilleAbout.scss'
import blank from '../../../../assets/blank.webp'


const STProfilleAbout = () => {
  return (
    <div id='stp-about'>
        <figure>
            <img src={blank} alt="" />

            <figcaption>
                <h4></h4>
            </figcaption>
        </figure>

        <article>
            <span>
                <h4>About Me</h4>
                <p></p>
            </span>

            <span>
                <h4>Prefered Subjects</h4>
                <p></p>
            </span>
        </article>
    </div>
  )
}

export default STProfilleAbout