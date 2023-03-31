import React, { useState } from 'react';
import DropdownInput from '../inputs/DropdownInput';
import TextInput from '../inputs/TextInput';
import "./_CreateBook.scss";

const addButton = '➕';

const optionsAge = [
    { value: 'open', label: 'Open' },
    { value: 'borrowed', label: 'Borrowed' },
];

const optionsStatus = [
    { value: 'kids', label: 'Kids' },
    { value: 'adults', label: 'Adults' },
];

const optionsGenre = [
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Dystopian', label: 'Dystopian' },
    { value: 'Action & Adventure', label: 'Action & Adventure' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Paranormal', label: 'Paranormal' },
    { value: 'Western', label: 'Western' },
    { value: 'Literary Fiction', label: 'Literary Fiction' },
    { value: 'Historical Fiction', label: 'Historical Fiction' },
    { value: 'Contemporary Fiction', label: 'Contemporary Fiction' },
    { value: 'Magic Realism', label: 'Magic Realism' },
    { value: 'Graphic Novel', label: 'Graphic Novel' },
    { value: 'Short Story', label: 'Short Story' },
    { value: 'Young Adult', label: 'Young Adult' },
    { value: 'New Adult', label: 'New Adult' },
    { value: 'Biographies', label: 'Biographies' },
    { value: 'Memoirs & Autobiographies', label: 'Memoirs & Autobiographies' },
    { value: 'Food & Drink', label: 'Food & Drink' },
    { value: 'Art & Photography', label: 'Art & Photography' },
    { value: 'Self-Help & Motivational', label: 'Self-Help & Motivational' },
    { value: 'History', label: 'History' },
    { value: 'Crafts, Hobbies & Home', label: 'Crafts, Hobbies & Home' },
    { value: 'Humor & Entertainment', label: 'Humor & Entertainment' },
    { value: 'Business & Money', label: 'Business & Money' },
    { value: 'Law & Criminology', label: 'Law & Criminology' },
    { value: 'Politics & Social Sciences', label: 'Politics & Social Sciences' },
    { value: 'Religion & Spirituality', label: 'Religion & Spirituality' },
    { value: 'Education & Teaching', label: 'Education & Teaching' },
    { value: 'Travel', label: 'Travel' },
    { value: 'True Crime', label: 'True Crime' },
    { value: 'Poetry', label: 'Poetry' },
    { value: 'Personal Growth', label: 'Personal Growth' },
];

const CreateBook = ({ bookId }) => {

    const handleFormSubmit = (event) => {
        event.preventDefault();

        return (
            console.log('this is the submit form')
        )
    }

    const loadBookData = (title, language, description, author, ageRange, genre, publishingYear) => {
        return (
            title = bookId.title,
            language = bookId.language,
            description = bookId.description,
            author = bookId.author, 
            ageRange = bookId.ageRange, 
            genre = bookId.ageRange,
            publishingYear = bookId.ageRange
        );
    };

    return (
        <>
            <h1>Add Your Book</h1>
            <form onSubmit={handleFormSubmit} onChange={(bookId) => loadBookData()}>
                <TextInput 
                    type='text'
                    placeholder='title here'
                    label='Title'
                    id='title'
                    className='title'
                />
                <TextInput 
                    type='text'
                    placeholder='language here...'
                    label='Language'
                    id='language'
                />
                <TextInput 
                    type='text'
                    placeholder='description here...'
                    label='Description'
                    id='description'
                    textarea
                />
                <TextInput 
                    type='text'
                    // placeholder='author name here...'
                    label='Author'
                    id='author'
                />
                <DropdownInput 
                    label = 'Age Range'
                    id = 'ageRange'
                    options={optionsAge}
                />
                <DropdownInput 
                    label = 'Status'
                    id = 'status'
                    options={optionsStatus}
                />
                <DropdownInput 
                    label = 'Genre'
                    id = 'genre'
                    options={optionsGenre}
                />
                <TextInput 
                    type='text'
                    placeholder=' '
                    label='Publishing Year'
                    id='publishingYear'
                />
                <button className='addButton'>{addButton}</button>
            </form>
        </>
    )
}

export default CreateBook;