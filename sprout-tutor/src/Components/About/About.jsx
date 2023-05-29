import React from 'react'
import './About.scss'
import about from '../../assets/about-bg.png'

const About = () => {
  return (
    <div id='about'>
        <h1>About SproutTutor</h1>

        <img src={about} alt="" />

        <p>
            At SproutTutor, we're passionate about revolutionizing education through innovative technology. Our user-friendly Learning Management System (LMS) empowers teachers, students (ages 8-16), and parents to unlock their full potential and achieve academic excellence. <br /> <br />
            With cutting-edge features and a seamless learning experience, we're transforming the way education is delivered and experienced. Our mission is to provide a comprehensive platform that simplifies course management, fosters collaboration, and enhances student engagement. <br /> <br />
            Join our community of thousands of educators, students, and parents who have already experienced the power of our LMS. Discover the future of education and unlock endless possibilities with SproutTutor!
        </p>
    </div>
  )
}

export default About