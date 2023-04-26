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
import ViewDashboard from './components/Dashboard/ViewDashboard'

import { BOOK_DATA } from './fixtures/bookData'

export const InputContext = createContext({})

const URL = 'http://localhost:8000/api/v1/'

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})
    const [loading, setLoading] = useState(false)
    const [quote, setQuote] = useState({})

    const getRandomQuote = () => {
        setLoading(true)
        setTimeout(() => {
            fetch('https://api.quotable.io/random')
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false)
                    setQuote(data)
                })
        }, 5000)
    }

    /* EXAMPLE: DropdownInput selection options
  
  const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
  ]
  */

    // useEffect(() => {
    //     ;(async () => {
    //         const myData = await getAllData(URL)
    //         setMessage(myData.data)
    //     })()

    //     return () => {
    //         console.log('unmounting')
    //     }
    // }, [])

    return (
        <>
            <div className="content">
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
                    <Header />

                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route path="" element={<HomePage />} />
                            <Route
                                path="/dashboard"
                                element={<ViewDashboard />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/contact"
                                element={<div>Contact</div>}
                            />
                            <Route
                                path="/books/create"
                                element={<CreateBook />}
                            />
                            <Route
                                path="/books/edit/:bookId"
                                element={<CreateBook />}
                            />
                            <Route
                                path="/books/:bookId"
                                element={<SingleBook item={BOOK_DATA} />}
                            />
                        </Route>
                    </Routes>
                </InputContext.Provider>

                <Footer />
                <div>
                    <div className="buttons">
                        <button
                            className="btn get-quote"
                            onClick={getRandomQuote}
                        >
                            Loading Spinner Quote Button (click here)
                        </button>
                    </div>
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="quote-section">
                            <blockquote className="quote">
                                {quote.content}
                            </blockquote>{' '}
                            <span className="author">{quote.author}</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
