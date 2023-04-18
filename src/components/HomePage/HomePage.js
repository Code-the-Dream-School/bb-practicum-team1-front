import React from 'react'
import BookList from '../BookList/BookList'

const HomePage = () => {
    //Sample array of book data (test)
    const bookList = [
        {
            title: 'Cinderella',
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
            title: 'War and Peace',
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
            title: 'War and Peace',
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
            title: 'War and Peace',
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
            title: 'War and Peace',
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
            title: 'War and Peace',
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
            title: 'War and Peace',
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
            title: 'War and Peace',
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
            title: 'Bible',
            language: 'Chinese',
            ageRange: 'adults',
            publishingYear: 1901,
            status: 'open',
            image: false,
            description:
                'The Christian scriptures, consisting of the Old and New Testaments',
            genre: 'Religion & Spirituality',
            author: 'unknown',
        },
        {
            title: 'Bible',
            language: 'Chinese',
            ageRange: 'adults',
            publishingYear: 1901,
            status: 'open',
            image: false,
            description:
                'The Christian scriptures, consisting of the Old and New Testaments',
            genre: 'Religion & Spirituality',
            author: 'unknown',
        },
        {
            title: 'Bible',
            language: 'Chinese',
            ageRange: 'adults',
            publishingYear: 1901,
            status: 'open',
            image: false,
            description:
                'The Christian scriptures, consisting of the Old and New Testaments',
            genre: 'Religion & Spirituality',
            author: 'unknown',
        },
        {
            title: 'Bible',
            language: 'Chinese',
            ageRange: 'adults',
            publishingYear: 1901,
            status: 'open',
            image: false,
            description:
                'The Christian scriptures, consisting of the Old and New Testaments',
            genre: 'Religion & Spirituality',
            author: 'unknown',
        },
    ]

    return (
        <div className="homePage">
            {/* <h1 className='homePageCards'>Welcome to ShelfShare</h1> */}

            {/* Render out the booklList on the home page */}
            <BookList bookList={bookList} />
        </div>
    )
}

export default HomePage
