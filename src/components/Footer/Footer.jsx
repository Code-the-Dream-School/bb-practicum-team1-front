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
                <a href="https://github.com/Manizha-khorram"><img src="https://avatars.githubusercontent.com/u/108601629?v=4" alt="Manizha"/></a>
                <a href="https://github.com/larasodjati"><img src="https://avatars.githubusercontent.com/u/108501073?v=4" alt="Lara"/></a>
                <a href="https://github.com/Ekaterina-Bondareva"><img src="https://avatars.githubusercontent.com/u/107886514?v=4" alt="Kate"/></a>
                <a href="https://github.com/cecerodrgz"><img src="https://avatars.githubusercontent.com/u/108601629?v=4" alt="Cecilia"/></a>
                <a href="https://github.com/SimonjShurety"><img src="https://avatars.githubusercontent.com/u/102368650?v=4" alt="Simon"/></a>
                <a href="https://github.com/koral14"><img src="https://avatars.githubusercontent.com/u/105457134?v=4" alt="Olga"/></a>
                
            </div>
          
                <p className='disclaimer-desktop'>Desktop Only</p>
            
                <p className='disclaimer-mobile'>Mobile Only</p>

            
        </div>
    )
}

export default Footer;