import React, { useState } from 'react';
import { forLoggedInUser, forSignedOutUser } from '../../constants';
import "./RightNav.scss";
// import styled from 'styled-components';

// const Ul = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-flow: row nowrap;
//   margin-top: 0;

//   li {
//     padding: 28px 15px;
//     font-size: 1.7rem;
//   }

//   @media (max-width: 768px) {
//     flex-flow: column nowrap;
//     background-color: black;
//     position: fixed;
//     transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
//     top: 0;
//     right: 0;
//     height: 100vh;
//     width: 300px;
//     padding-top: 3.5rem;
//     transition: transform 0.3s ease-in-out;

//     li {
//       color: #fff;
//       cursor: pointer;
//     }
//   }
// `;

const RightNav = ({ open }) => {
  // created only for being able to impliment the if
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`${open ? 'openClass' : 'closeClass'}`}>
      <ul open={open} className={`${open ? 'openClass' : 'closeClass'}`}>
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
        {/* Left this lines here for a visual effect because the ones above do not display anything yet */}
          
    </div>
  )
}

export default RightNav;