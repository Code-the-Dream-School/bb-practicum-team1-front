import React, { useEffect, useState, useContext } from 'react'
import BookList from '../BookList/BookList'
import { getAllBooksAdapter } from '../../adapters/book-adapters'
import { LoadingContext } from '../../App.js'

const genresArr = ['Mystery', 'History', 'Fantasy', 'Romance', 'Historical Fiction', 'Thriller', 'Young Adult'];

const getRandomGenre = () => {
    return genresArr[Math.floor(Math.random() * genresArr.length)];
};

const HomePage = () => {
    const [books1, setBooks1] = useState([]);
    const [books2, setBooks2] = useState([]);
    const { setLoading } = useContext(LoadingContext)

    const DELAY = 600
    const REQUEST_BOOK_LIMITATION = 4

    useEffect(() => {
        setLoading(true)
            const getAllBooks = async () => {
                await getAllBooksAdapter({
                    limit: REQUEST_BOOK_LIMITATION,
                    genres: getRandomGenre()
                })
                    .then((result) => {
                        if (!result) return
                        setBooks2(result.books)
                    })
                    .catch((error) => console.error('❌ ', error))

                await getAllBooksAdapter({
                    limit: REQUEST_BOOK_LIMITATION,
                    sort: 'CreatedAt',
                })
                    .then((result) => {
                        if (!result) return
                        setBooks1(result.books)
                    })
                    .catch((error) => console.error('❌ ', error))
            }

            const timeout = setTimeout(() => {
                getAllBooks()
                setLoading(false)
            }, DELAY)

        return () => clearTimeout(timeout)
    }, [])  

    let firstBook = '';
    for (let i = 0; i < books2.length; i++) {
        firstBook = books2[0];
    }

    return (
        <>
            <div className="homePage">
                <h1 className='h1-homePageCards'>Welcome to ShelfShare</h1>
                {/* Render out the booklList on the home page */}
                    <div className='book-list-1'>
                        <h2 className='h2-home-page'>Our most recent books: </h2>
                        <BookList bookList={books1}/>
                    </div>
                    <div className='book-list-2'>
                        <h2 className='h2-home-page'>Checkout these recent "{firstBook.genre}" books: </h2>
                        <BookList bookList={books2} />
                    </div> 
            </div>
        </>
    )
}

export default HomePage
