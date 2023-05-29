import React from 'react'
import './Landing.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Offers from '../../Components/Offers/Offers'
import Certificate from '../../Components/Certificate/Certificate'
import About from '../../Components/About/About'
import Started from '../../Components/Started/Started'
import Pricing from '../../Components/Pricing/Pricing'
import Testimonial from '../../Components/Testemonial/Testimonial'
import Contact from '../../Components/ContactUs/Contact'

const Landing = () => {
  return (
    <div id='landing'>
      <Navbar />

      <Hero />

      <Offers />

      <Certificate />

      <About />

      <Started />

      <Pricing />

      <Testimonial />

      <Contact />

    </div>
  )
}

export default Landing