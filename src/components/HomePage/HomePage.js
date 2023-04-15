import React from 'react';
import BookList from '../BookList/BookList';
import AddressSearch from '../AddressSearch/AddressSearch';

const HomePage = () => {
    //Sample array of book data (test)
    const bookList = [
        {
            title: 'Cinderella',
            language: 'English',
            ageRange: 'kids',
            publishingYear: 2022,
            status: 'open',
            image: 'cinderella.jpg',
            description: 'Colorful book with a lot of beautiful pictures',
            // Let's add 'Fairy tale' to the list of genres???
            genre: 'Fairy tale', 
            author: 'Charles Perrault',
        },
        {
            title: 'War and Peace',
            language: 'Russian',
            ageRange: 'adults',
            publishingYear: 1988,
            status: 'borrowed',
            image: 'war_and_peace.jpg',
            description: 'The classic of world literature',
            // Let's add 'Novel' to the list of genres???
            genre: 'Novel', 
            author: 'Leo Tolstoy',
        },
        {
            title: 'Bible',
            language: 'Chinese',
            ageRange: 'adults',
            publishingYear: 1901,
            status: 'open',
            image: 'bible.jpg',
            description: 'The Christian scriptures, consisting of the Old and New Testaments',
            // Let's add 'Religious text' to the list of genres???
            genre: 'Religious text', 
            author: 'unknown',
        },
    ];

    const dummiText = "A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools.A textbook is a book containing a comprehensive compilation of content in a branch of study with the intention of explaining it. Textbooks are produced to meet the needs of educators, usually at educational institutions. Schoolbooks are textbooks and other books used in schools."
    return (
        <div>
            <h1>This is the Home Page</h1>
            <AddressSearch id={"mySearch"} />
            {/* Render out the booklList on the home page */}
            <BookList bookList={bookList}/>
            <p>{dummiText}</p>
            <p>{dummiText}</p>
            <p>{dummiText}</p>
        </div>
    );
};

export default HomePage; 