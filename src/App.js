import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllData } from './util/index'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage'
import CreateBook from './components/CreateBook/CreateBook'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { setCookie, getCookie, deleteCookie } from './util/Authentication'
import './sass/app.scss'
import Flipbook from './components/LoadingSpinner/Flipbook'

export const InputContext = createContext({})

const URL = 'http://localhost:8000/api/v1/'

const App = () => {
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

    return (
        <>
            <Header />
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

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            // <ProtectedRoute>
                            <HomePage />
                            // </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/createBook" element={<CreateBook />} />
                </Routes>
            </InputContext.Provider>
            <div>
                <div className="buttons">
                    <button className="btn get-quote" onClick={getRandomQuote}>
                        Generate Quote
                    </button>
                </div>
                {loading ? (
                    <Flipbook />
                ) : (
                    <div className="quote-section">
                        <blockquote className="quote">
                            {quote.content}
                        </blockquote>{' '}
                        <span className="author">{quote.author}</span>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default App
