import React, { useState } from 'react'
import { forLoggedInUser, forSignedOutUser } from '../../constants'

const RightNav = ({ open }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className='rightNav'>
            <ul className={`${open ? 'openClass' : 'closeClass'}`}>
                {isLoggedIn
                    ? forLoggedInUser.map(function (routeObj) {
                          return (
                              <li key={routeObj.route} className="button-17">
                                  <a href={routeObj.route}>{routeObj.name}</a>
                              </li>
                          )
                      })
                    : forSignedOutUser.map(function (routeObj) {
                          return (
                              <li key={routeObj.route} className="button-17">
                                  <a href={routeObj.route}>{routeObj.name}</a>
                              </li>
                          )
                      })}
            </ul>
        </div>
    )
}

export default RightNav
