import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllData } from './util/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { HomePage } from './components/HomePage/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './sass/app.scss';

const URL = 'http://localhost:8000/api/v1/';

const App = () => {

const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route 
          exact path="/" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route  
          path="/login" 
          element={<LoginPage />} 
        />
      </Routes> 
      <Footer />
    </>
  );
}

export default App;
