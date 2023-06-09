import React from 'react'
import './StudentExplore.scss'
import StudentTopNav from '../../Components/StudentComponents/StudentTopNav/StudentTopNav'
import Footer from '../../Components/Footer/Footer'
import ExploreFilter from '../../Components/StudentComponents/StudentExploreComponents/ExploreFilter/ExploreFilter'
import ExploreDisplay from '../../Components/StudentComponents/StudentExploreComponents/ExploreDisplay/ExploreDisplay'

const StudentExplore = () => {
  return (
    <div id='st-explore'>
        <StudentTopNav title={'Home >'} text={'Explore'} />

        <span id='ex-head'><h1>All Courses</h1></span>

        <div id="explore-main">
            <ExploreFilter />

            <ExploreDisplay />
        </div>

        <Footer />
    </div>
  )
}

export default StudentExplore