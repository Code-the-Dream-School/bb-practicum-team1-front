import React from 'react';
import Burger from './Burger';
import { forLoggedInUser, forSignedOutUser } from '../../constants';
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

            {/* map through the array with routes and route names and returning the correspondig page*/}
            {forLoggedInUser.map(function(user) {
                // return (
                //     <Home />
                // )
            })}

            {/* map through the array with an authenticated and unauthenticated user and returning the correspondig page*/}
             {forSignedOutUser.map(function(user) {
                // return (
                //     <Login />
                // )
            })}
        </>
    )
}

export default Header;