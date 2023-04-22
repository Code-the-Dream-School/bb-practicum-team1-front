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
        status: 'open',
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
        status: 'open',
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
        status: 'open',
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
]

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArr = (arr) => {
    return arr[getRandom(0, arr.length - 1)];
};

// const get5RandomBooks = () => {
//     return randomArr(bookList);
// };

// const get5RecentBooks = () => {
//     const breed = randomArr(bookList);
//     return breed.id;
// };

// const getRandomCatImage = async () => {
//     return await getCatImage(getCatBreed());
// }

const HomePage = () => {
    //Sample array of book data (test)
    const { inputs, handleBulkInput } = useContext(InputContext);

    const randomBooks = (max) => {
        let random5Books = [];
        for (let i = 0; i < max; i++) (
            random5Books = randomArr (
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
            )  
        )
        return random5Books;
    }

    console.log('this is inputs', inputs)
    console.log(randomBooks(5))
    return (
        <div className="homePage">
            {/* <h1 className='homePageCards'>Welcome to ShelfShare</h1> */}

            {/* Render out the booklList on the home page */}
            <BookList bookList={bookList} />
            <BookList bookList={bookList} />

        </div>
    )
}

export default HomePage
