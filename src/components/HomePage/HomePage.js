import React, { useEffect, useState } from 'react'
import BookList from '../BookList/BookList'
import { getAllBooksAdapter } from '../../adapters/book-adapters'

const HomePage = () => {
    const [books1, setBooks1] = useState([]);
    const [books2, setBooks2] = useState([]);
    
    useEffect(() => {
        getAllBooksAdapter({
            limit: 4,
        }).then(result => {
            if(result) {
                setBooks2(result.books)
            }
        })
    }, [])

    useEffect(() => {
        getAllBooksAdapter({
            limit: 4,
            sort: 'CreatedAt',
        }).then(result => {
            if(result) {
                setBooks1(result.books)
            }
        })
    }, [])

    return (
        <div className="homePage">
            {/* <h1 className='homePageCards'>Welcome to ShelfShare</h1> */}
            {/* Render out the booklList on the home page */}
            <BookList bookList={books1} />
            <BookList bookList={books2} />
        </div>
    )
}

export default HomePage;
