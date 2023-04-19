import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllData } from './util/index'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SingUp'
import LoginPage from './components/LoginPage/LoginPage'
import CreateBook from './components/CreateBook/CreateBook'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { setCookie, getCookie, deleteCookie } from './util/Authentication'
import DebouncedSearch from './util/DebouncedSearch/DebouncedSearch'
import './sass/app.scss'
import BookItem from './components/BookItem/BookItem'
import SingleBook from './components/SingleBook/SingleBook'

const testBook = {
    title: 'Cinderella',
    language: 'English',
    ageRange: 'kids',
    publishingYear: 2022,
    status: 'open',
    image: true,
    description: "Catrina and her family are moving to the coast of Northern California because her little sister, Maya, is sick. Cat isn't happy about leaving her friends for Bahía de la Luna, but Maya has cystic fibrosis and will benefit from the cool, salty air that blows in from the sea. As the girls explore their new home, a neighbor lets them in on a secret: There are ghosts in Bahía de la Luna. Maya is determined to meet one, but Cat wants nothing to do with them. As the time of year when ghosts reunite with their loved ones approaches, Cat must figure out how to put aside her fears for her sisters sake -- and her own.Raina Telgemeier has masterfully created a moving and insightful story about the power of family and friendship, and how it gives us the courage to do what we never thought possible.",
    genre: 'Literary Fiction', 
    author: 'Charles Perrault',
}

export const InputContext = createContext({})

const URL = 'http://localhost:8000/api/v1/'

const App = () => {
    const [message, setMessage] = useState('')
    const [inputs, setInputs] = useState({})

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
            <Header />
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
                        {/* <ProtectedRoute> */}
                        <Route path="/login" element={<Login />} />
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

                        <Route path="/sign-up" element={<SignUp />} />

                        {/* </ProtectedRoute> */}
                        {/* <Route path="/createBook" element={<CreateBook />} /> */}
                        <Route path="/books/create" element={<CreateBook />} />
                        <Route path="/books/edit/:bookId" element={<CreateBook />} />
                        <Route path="/books/:bookId" element={<SingleBook item={testBook} />} />
                    </Routes>
                </InputContext.Provider>
            </div>
            <Footer />
        </>
    )
}

export default App
