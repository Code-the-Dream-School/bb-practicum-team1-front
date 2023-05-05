import React, { useEffect, useState, useContext } from 'react'
import BookList from '../BookList/BookList'
import { getAllBooksAdapter } from '../../adapters/book-adapters'
import { LoadingContext } from '../../App'

const bookList = [
    {
        title: 'Test',
        language: 'English',
        ageRange: 'kids',
        publishingYear: 2022,
        status: 'open',
        image: true,
        description: 'Colorful book with a lot of beautiful pictures',
        genre: 'Literary Fiction',
        author: 'Charles Perrault',
    },
    {
        title: 'Cinderella',
        language: 'English',
        ageRange: 'kids',
        publishingYear: 2022,
        status: 'open',
        image: false,
        description: 'Colorful book with a lot of beautiful pictures',
        genre: 'Literary Fiction',
        author: 'Charles Perrault',
    },
    {
        title: 'War and Peace1',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace2',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'open',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace3',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'open',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace4',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace5',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace6',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'open',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace7',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace8',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel',
        author: 'Leo Tolstoy',
    },
]

const HomePage = () => {
    const [books1, setBooks1] = useState([])
    const [books2, setBooks2] = useState([])
    const { loading, setLoading } = useContext(LoadingContext)
    const DELAY = 600
    const REQUEST_BOOK_LIMITATION = 4

    useEffect(() => {
        setLoading(true)
        const getAllBooks = async () => {
            await getAllBooksAdapter({
                limit: REQUEST_BOOK_LIMITATION,
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

    // useEffect(() => {
    //     getAllBooksAdapter({
    //         limit: 4,
    //         sort: 'CreatedAt',
    //     }).then((result) => {
    //         if (result) {
    //             setBooks1(result.books)
    //         }
    //     })
    // }, [])

    return (
        <div className="homePage">
            {/* <h1 className='homePageCards'>Welcome to ShelfShare</h1> */}
            {/* Render out the booklList on the home page */}
            <BookList bookList={books1} />
            <BookList bookList={books2} />
        </div>
    )
}

export default HomePage
