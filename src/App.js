import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const URL = 'http://localhost:8000/api/v1/';

function App() {

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
      <h1>{message}</h1>
      
      <Footer />
    </>
  );
}

export default App;
