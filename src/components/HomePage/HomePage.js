import React, {useContext} from 'react'
import BookList from '../BookList/BookList'
import { Link } from 'react-router-dom'
import { getAllBooksAdapter } from '../../adapters/book-adapters'
import { InputContext } from '../../App';

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

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArr = (arr) => {
    return arr[getRandom(0, arr.length - 1)];
};



// console.log("books", get5RecentBooks())

const HomePage = () => {
   
    const { inputs, handleBulkInput } = useContext(InputContext);

    const get5RandomBooks = () => {
        const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
        const shuffledBooks = shuffle(bookList);
        let arrayOf5 = [];
        for (let i = 0; i < 5; i++) {
            arrayOf5.push(shuffledBooks[i])
            
        }
        return arrayOf5;
    }

    console.log(get5RandomBooks())

    const get5RecentBooks = () => {
        return bookList.slice(Math.max(bookList.length - 5, 0))
    }

    console.log('recent', get5RecentBooks())

        const getAllBooks = () => {
            getAllBooksAdapter(
                { 
                    title: inputs.title, 
                    author: inputs.author, 
                    sort: inputs.sort,
                    fields: inputs.fields,
                    searchRadius: inputs.searchRadius,
                    latitude: inputs.latitude,
                    longitude: inputs.longitude,
                    page: inputs.page,
                    limit: inputs.limit,
                    skip: inputs.skip
                }     
            )
        }        

    return (
        <div className="homePage">
            {/* <h1 className='homePageCards'>Welcome to ShelfShare</h1> */}

            {/* Render out the booklList on the home page */}
            <BookList bookList={get5RandomBooks()} />
            <BookList bookList={get5RecentBooks()} />

        </div>
    )
}

export default HomePage;
