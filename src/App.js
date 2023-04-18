import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllData } from './util/index'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Login } from './components/LoginPage/LoginPage'
import { SignUp } from './components/SignupPage/SignUp'
import LoginPage from './components/LoginPage/LoginPage'
import CreateBook from './components/CreateBook/CreateBook'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { setCookie, getCookie, deleteCookie } from './util/Authentication'
import DebouncedSearch from './util/DebouncedSearch/DebouncedSearch'
import './sass/app.scss'

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

    useEffect(() => {
        ;(async () => {
            const myData = await getAllData(URL)
            setMessage(myData.data)
        })()

        return () => {
            console.log('unmounting')
        }
    }, [])

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
                        <Route path="/createBook" element={<CreateBook />} />
                    </Routes>
                </InputContext.Provider>
            </div>
            <Footer />
        </>
    )
}

export default App
