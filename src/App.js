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
                            setInputs({ ...inputs, [inputName]: inputValue }),

                        handleBulkInput: (inputObj) =>
                            setInputs({ ...inputs, ...inputObj }),
                    }}
                >
                    {/* EXAMPLE: How to add TextInput and DropdownInput
        
        <TextInput
        label="Text Input"
        id="testInput"
        type="text"
        placeholder="Enter text here"
        textarea={false}
        />
        <Route  
        path="/login" 
        element={<LoginPage />} 
        />
        <Route  
        path="/createBook" 
        element={<CreateBook />} 
        />
        <TextInput
        label="Text Area"
        id="textArea"
        type="textarea"
        placeholder="Enter text here"
        textarea={true}
            />
            <DropdownInput
            label="Dropdown Menu"
            id="DropdownMenu"
            options={options}
          /> */}
                    <Header />
                    <Routes>
                        <Route path="" element={<HomePage />} />
                        {/* <ProtectedRoute> */}
                        <Route path="login" element={<Login />} />
                        {/* this is an example implementation of the DebouncedSearch component */}
                        {/* <Route  
            path="/debounce" 
            element={<DebouncedSearch 
              id={'Debounce'}
              handleDebounce={(inputVal) => console.log(inputVal)}
              />} 
            /> */}

                        {/* </ProtectedRoute> */}

                        {/* <ProtectedRoute> */}

                        <Route path="sign-up" element={<SignUp />} />

                        <Route path="about" element={<About />} />
                        {/* </ProtectedRoute> */}
                        <Route path="createBook" element={<CreateBook />} />
                    </Routes>
                    <Footer />
                </InputContext.Provider>
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
