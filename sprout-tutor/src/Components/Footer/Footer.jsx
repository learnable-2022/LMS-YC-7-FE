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
                <Link to='about' className='link'>About</Link>
                <Link to='contact' className='link'>Contact Us</Link>
            </nav>

            <nav>
                <h1>Community</h1>
                <NavigateButton link={''} title={'Team Plans'} id={'link'}/>
                <NavigateButton link={''} title={'Blog'} id={'link'}/>
                <NavigateButton link={''} title={'Students'} id={'link'}/>
            </nav>

            <nav>
                <h1>Teaching</h1>
                <NavigateButton link={''} title={'Become a Teacher'} id={'link'}/>
                <NavigateButton link={''} title={'Teaching Academy'} id={'link'}/>
            </nav>

            <nav>
                <h1>Be Social</h1>
                <a href=""><i className='fa-brands fa-twitter'></i> Twitter</a>
                <a href=""><i className='fa-brands fa-facebook'></i> Facebook</a>
                <a href=""><i className='fa-brands fa-instagram'></i> Instagram</a>
                <a href=""><i className='fa-brands fa-linkedin'></i> LinkedIn</a>
            </nav>

        </div>

        <span>
            <p> © Copyright {year} by SproutTutor. All Rights Reserved</p>
        </span>
    </footer>
  )
}

export default Footer