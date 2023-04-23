import React from 'react'
import BookList from '../BookList/BookList'
import { Link } from 'react-router-dom'
import { getAllBooksAdapter } from '../../adapters/book-adapters'

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

    const get5RecentBooks = () => {
        getAllBooksAdapter({
                limit: 5,
        })
    }   
    console.log("get 5 books", get5RecentBooks())
    const books = get5RecentBooks()
    return (
        <div className="homePage">
            {/* <h1 className='homePageCards'>Welcome to ShelfShare</h1> */}

            {/* Render out the booklList on the home page */}
            {/* <BookList bookList={get5RandomBooks()} /> */}
            <BookList bookList={books} />
        </div>
    )
}

export default HomePage;
