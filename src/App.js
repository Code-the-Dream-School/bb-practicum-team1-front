import React, { useState, useEffect, createContext } from 'react'

// 3rd-party dependencies
import { Routes, Route } from 'react-router-dom'

// utility functions
import { getAllData } from './util/index'
import DebouncedSearch from './util/DebouncedSearch/DebouncedSearch'
import { setCookie, getCookie, deleteCookie } from './util/Authentication'

// UI Components
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

// Page components
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import LoginPage from './components/LoginPage/LoginPage'
import CreateBook from './components/CreateBook/CreateBook'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

import './sass/app.scss'
import About from './components/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BookItem from './components/BookItem/BookItem'
import SingleBook from './components/SingleBook/SingleBook'

const testBook = {
    title: 'Cinderella',
    language: 'English',
    ageRange: 'kids',
    publishingYear: 2022,
    status: 'open',
    image: true,
    description:
        "Catrina and her family are moving to the coast of Northern California because her little sister, Maya, is sick. Cat isn't happy about leaving her friends for Bahía de la Luna, but Maya has cystic fibrosis and will benefit from the cool, salty air that blows in from the sea. As the girls explore their new home, a neighbor lets them in on a secret: There are ghosts in Bahía de la Luna. Maya is determined to meet one, but Cat wants nothing to do with them. As the time of year when ghosts reunite with their loved ones approaches, Cat must figure out how to put aside her fears for her sisters sake -- and her own.Raina Telgemeier has masterfully created a moving and insightful story about the power of family and friendship, and how it gives us the courage to do what we never thought possible.",
    genre: 'Literary Fiction',
    author: 'Charles Perrault',
}

export const InputContext = createContext({})
export const SessionContext = createContext({
    sessionObject: {},
    setSessionObect: () => {},
})

const URL = 'http://localhost:8000/api/v1/'

/**
 *  level 1 - some kinda of state - dark/light mode   Provider (parent)
 *  level 6 dark/light mode (useContext)
 */

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})
    const [sessionObject, setSessionObject] = useState(getCookie())
    const [loading, setLoading] = useState(false)
    const [night, setNight] = useState(false)

    return (
        <>
            <div className="content">
                <div className={!night ? '' : 'night-mode-bg'}>
                    <SessionContext.Provider
                        value={{ sessionObject, setSessionObject }}
                    >
                        <InputContext.Provider
                            value={{
                                inputs,
                                handleInputChange: (inputName, inputValue) =>
                                    setInputs({
                                        ...inputs,
                                        [inputName]: inputValue,
                                    }),

                                handleBulkInput: (inputObj) =>
                                    setInputs({ ...inputs, ...inputObj }),
                            }}
                        >
                            <Header night={night} setNight={setNight} />
                            <Routes>
                                <Route path="" element={<HomePage />} />

                                <Route
                                    path="/login"
                                    element={
                                        <ProtectedRoute requiredAuthLevel="anonymous">
                                            <Login />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/sign-up"
                                    element={
                                        <ProtectedRoute requiredAuthLevel="anonymous">
                                            <SignUp
                                                setSessionObject={
                                                    setSessionObject
                                                }
                                            />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/books/create"
                                    element={
                                        <ProtectedRoute requiredAuthLevel="user">
                                            <CreateBook />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/books/edit/:bookId"
                                    element={
                                        <ProtectedRoute requiredAuthLevel="user">
                                            <CreateBook />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/books/:bookId"
                                    element={
                                        <ProtectedRoute requiredAuthLevel="user">
                                            <SingleBook item={testBook} />
                                        </ProtectedRoute>
                                    }
                                />
                            </Routes>
                        </InputContext.Provider>
                    </SessionContext.Provider>
                </div>
                <Footer />
                {/* <div> */}
                {/* <div className="buttons">
                        <button
                            className="btn get-quote"
                            onClick={getRandomQuote}
                        >
                            Loading Spinner Quote Button (click here)
                        </button>
                    </div> */}
                {/* {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="quote-section">
                            <blockquote className="quote">
                                {quote.content}
                            </blockquote>{' '}
                            <span className="author">{quote.author}</span>
                        </div>
                    )} */}
                {/* </div> */}
            </div>
        </>
    )
}

export default App
