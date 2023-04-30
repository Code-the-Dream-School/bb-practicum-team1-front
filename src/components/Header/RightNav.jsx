import React, { useState, useContext } from 'react'
import { forLoggedInUser, forSignedOutUser } from '../../constants'
import { SessionContext /* <-- this is createContet()*/ } from '../../App'
import { logoutAdapter } from '../../adapters/auth-adapters'

const RightNav = ({ open }) => {
    const { sessionObject, setSessionObject } = useContext(SessionContext)

    return (
        <div className="rightNav">
            <ul className={`${open ? 'openClass' : 'closeClass'}`}>
                {sessionObject
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
                {sessionObject && (
                    <button
                        className="button-17"
                        onClick={() => {
                            logoutAdapter()
                            setSessionObject(null)
                        }}
                    >
                        Log Out
                    </button>
                )}
            </ul>
        </div>
    )
}

export default RightNav
