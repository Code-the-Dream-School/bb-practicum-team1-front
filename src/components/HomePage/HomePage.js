import React, { useEffect, useState } from 'react'
import BookList from '../BookList/BookList'
import { getAllBooksAdapter } from '../../adapters/book-adapters'

const genresArr = ['Mystery', 'History', 'Fantasy', 'Romance', 'Historical Fiction', 'Thriller', 'Young Adult'];

const getRandomGenre = () => {
    return genresArr[Math.floor(Math.random() * genresArr.length)];
};

const HomePage = () => {
    const [books1, setBooks1] = useState([]);
    const [books2, setBooks2] = useState([]);

    useEffect(() => {
        getAllBooksAdapter({
            limit: 4,
            genres: getRandomGenre()
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
        <>
            <div className="homePage">
                <h1 className='h1-homePageCards'>Welcome to ShelfShare</h1>
                {/* Render out the booklList on the home page */}
                <div className='book-list-1'>
                    <h2 className='h2-home-page'>Our most recent books: </h2>
                    <BookList bookList={books1} />
                </div>
                <div className='book-list-2'>
                    <h2 className='h2-home-page'>Checkout these recent "{`${getRandomGenre()}`}" books: </h2>
                    <BookList bookList={books2} />
                </div>
            </div>
        </>
    )
}

export default HomePage;
