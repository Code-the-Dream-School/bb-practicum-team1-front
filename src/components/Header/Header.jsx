import React, { useState } from 'react';
import './_Header.scss';
import logo from './logo.png';
// import logo from '../../../images/logo'
import RightNav from './RightNav';

// Header should always display even when scrolling and should be visible on every page.

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='nav'>
            <div className='nav-container'>
                <div className='navbar'>
                    <div className='logo-pic'><img src={logo} alt="logo" /></div>
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