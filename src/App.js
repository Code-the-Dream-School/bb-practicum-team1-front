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

const URL = 'http://localhost:8000/api/v1/'

const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    const fetcher = () => {
        setLoading(true)
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((fetchedData) => {
                    setLoading(false)
                    setData(fetchedData)
                })
        }, 1000)
    }
    return [fetcher, loading, data]
}

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})

    const [getRandomQuote, loadingQuote, quote] = useFetch(
        'https://api.quotable.io/random'
    )

    // const [getCat, loadingCat, cat] = useFetch('https://api.cat.random')

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
                        {/* <Route path="/createBook" element={<CreateBook />} /> */}
                        <Route path="/books/create" element={<CreateBook />} />
                        <Route
                            path="/books/edit/:bookId"
                            element={<CreateBook />}
                        />
                        <Route
                            path="/books/:bookId"
                            element={<SingleBook item={testBook} />}
                        />
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
                    {quote && (
                        <div className="quote-section">
                            <blockquote className="quote">
                                {quote.content}
                            </blockquote>{' '}
                            <span className="author">{quote.author}</span>
                        </div>
                    )}
                </div>
            </div>
            <LoadingSpinner loading={loadingQuote} />
        </>
    )
}

export default App
