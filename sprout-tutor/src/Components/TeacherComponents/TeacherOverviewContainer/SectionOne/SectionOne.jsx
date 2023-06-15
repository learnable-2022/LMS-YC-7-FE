import React from 'react'
import './SectionOne.scss'
import ToggleButton from '../../../ToggleButton/ToggleButton'

const SectionOne = () => {
  return (
    <div id='t-sect-one'>
        <aside>
            <h2>Sale</h2>

            <div id="sale-analysis">
                <div className="circle">
                    <p>
                        0 <br />
                        Total sales
                    </p>
                </div>
            </div>

            
        </aside>

        <section>
            <h2>Student queries</h2>

            <ToggleButton text={'Add Courses'} className={'add-std'} >
                <i className='fa-solid fa-plus'></i>
            </ToggleButton>
        </section>
    </div>
  )
}

export default SectionOne