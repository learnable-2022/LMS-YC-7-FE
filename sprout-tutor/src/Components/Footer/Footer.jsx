import React, {useState, useEffect} from 'react'
import './Footer.scss'
import logo from '../../assets/footlogo.png'
import { Link } from 'react-scroll'
import NavigateButton from '../NavigateButton/NavigateButton'

const Footer = () => {
    const [year, setYear] = useState(null);

    useEffect(() => {
        const date = new Date();
        const currentYear = date.getFullYear();
        setYear(currentYear);
    }, []);
    
  return (
    <footer>
        <div className="foots">
            <img src={logo} alt="" />

            <nav>
                <h1>Company</h1>
                <Link to='about' smooth={true} duration={500} spy={true} className='link'>About</Link>
                <Link to='contact' smooth={true} duration={500} spy={true} className='link'>Contact Us</Link>
            </nav>

            <nav>
                <h1>Community</h1>
                <NavigateButton link={''} title={'Team Plans'} id={'link'}/>
                <NavigateButton link={''} title={'Blog'} id={'link'}/>
                <NavigateButton link={''} title={'Students'} id={'link'}/>
            </nav>

            <nav>
                <h1>Product</h1>
                <NavigateButton link={''} title={'Teaching'} id={'link'}/>
                <NavigateButton link={''} title={'Become a Teacher'} id={'link'}/>
                <NavigateButton link={''} title={'Teaching Academy'} id={'link'}/>
                <NavigateButton link={''} title={'Sprout Tutor for Schools'} id={'link'}/>
            </nav>

            <nav>
                <h1>Policy</h1>
                <NavigateButton link={''} title={'Privacy Policy'} id={'link'}/>
                <NavigateButton link={''} title={'Cookie Settings'} id={'link'}/>
                <NavigateButton link={''} title={'SiteMap'} id={'link'}/>
                <NavigateButton link={''} title={'Accessibility'} id={'link'}/>
            </nav>


        </div>

        <nav id='footer-socials'>
            <a href=""><i className='fa-brands fa-twitter'></i></a>
            <a href=""><i className='fa-brands fa-facebook'></i></a>
            <a href=""><i className='fa-brands fa-instagram'></i></a>
            <a href=""><i className='fa-brands fa-linkedin'></i></a>
        </nav>

        <span>
            <p> © Copyright {year} by SproutTutor. All Rights Reserved</p>
        </span>
    </footer>
  )
}

export default Footer