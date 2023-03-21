import React from 'react';
import './Footer.css';

// Footer should include a copyright logo. If desktop or mobile only should include a disclaimer that it was designed as such. 
// Should be visible on every page
// Should always be at the very bottom of the page regardless of content length.

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>© 2023 BookSwap</p>
            <div className='git-links'>
                <p>Follow Us on GitHub</p>
                <a href="https://github.com/Manizha-khorram">Manizha</a>
                <a href="https://github.com/cecerodrgz">Cecilia</a>
                <a href="https://github.com/SimonjShurety">Simon</a>
                <a href="https://github.com/larasodjati">Lara</a>
                <a href="https://github.com/Ekaterina-Bondareva">Kate</a>
                <a href="https://github.com/koral14">Olga</a>
                
            </div>
            <p className='disclaimer'>This app was designed desktop only</p>
        </div>
    )
}

export default Footer;