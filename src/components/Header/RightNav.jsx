import React, { useState } from 'react';
import { forLoggedInUser, forSignedOutUser } from '../../constants';
import "./_RightNav.scss";

const RightNav = ({ open }) => {
  // created only for being able to impliment the if
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Left this lines here for a visual effect because the ones above do not display anything yet */}   
      <ul className={`${open ? 'openClass' : 'closeClass'}`} open={open} >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
      {/* map through the array with routes and route names and returning the correspondig page*/}
      {/* map through the array with an authenticated and unauthenticated user and returning the correspondig page*/}

      {isLoggedIn ? (
        forLoggedInUser.map(function(routeObj) {
          <ul open={open}>
            <li><a>{routeObj.name}</a></li>
          </ul>
      })
      ) : (
        forSignedOutUser.map(function(routeObj) {
          <ul open={open}>
            <li><a>{routeObj.name}</a></li>
          </ul>
        })
      )}
    </div>
  )
}

export default RightNav;