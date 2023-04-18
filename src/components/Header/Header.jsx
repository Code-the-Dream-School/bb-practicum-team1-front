import React, { useState } from 'react';
import logo from './logo.png';
import logo1 from './logo1.png';
import RightNav from './RightNav';

// Header should always display even when scrolling and should be visible on every page.

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='nav'>
            <div className='nav-container'>
                <div className='logo-pic'><img src={logo1} alt="logo"/></div>
                <div className='navbar'>
                    <div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
                        <div className={isOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
                            <span className={isOpen ? 'lineTop spin' : 'lineTop'}></span>
                            <span className={isOpen ? 'lineBottom spin' : 'lineBottom'}></span>                        
                        </div>
                            <RightNav open={isOpen} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;