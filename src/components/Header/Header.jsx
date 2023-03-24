import React from 'react';
import Burger from './Burger';
import './Header.css';
import logo from './logo.png'

// Header should always display even when scrolling and should be visible on every page.

const Header = () => {

    return (
        <>
            {/* Header should include a simple logo (just text is fine) */}
            <div className='header'>
                <div className='nav'>
                    <div className='logo'><img src={logo} alt="logo" /></div>
                    <Burger />
                </div>
            </div>
        </>
    )
}

export default Header;