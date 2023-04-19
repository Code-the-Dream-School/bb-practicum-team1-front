import React, { useState, useEffect, useContext } from 'react';
import DropdownInput from '../inputs/DropdownInput';
import TextInput from '../inputs/TextInput';
import { useParams } from 'react-router-dom';
import { createBookAdapter, getSingleBookAdapter, updateBookAdapter } from '../../adapters/book-adapters';

import { InputContext } from '../../App';

const addButton = '➕';
var remove = '\u2718';

const optionsStatus = [
    { value: 'open', label: 'Open' },
    { value: 'borrowed', label: 'Borrowed' },
];

const optionsAge = [
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

    const routeParams = useParams();
    console.log(routeParams)

    const { inputs, handleBulkInput } = useContext(InputContext);

    // placeholder for book update
    const [bookInformation, setBookInformation] = useState({});

    const [selectedImage, setSelectedImage] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        routeParams.bookId ? 
            (updateBookAdapter( 
                { 
                    id: routeParams.bookId, 
                    title: inputs.title, 
                    language: inputs.language, 
                    ageRange: inputs.ageRange, 
                    publishingYear: inputs.publishingYear, 
                    status: inputs.status, 
                    description: inputs.description, 
                    genre: inputs.genre, 
                    author: inputs.author, 
                    worldcatURL: inputs.worldcatURL, 
                    ISBN: inputs.ISBN, 
                    imageURL: inputs.imageURL
                }                   
            )) : (createBookAdapter(
                {
                    title: inputs.title, 
                    language: inputs.language, 
                    ageRange: inputs.ageRange, 
                    publishingYear: inputs.publishingYear, 
                    status: inputs.status, 
                    description: inputs.description, 
                    genre: inputs.genre, 
                    author: inputs.author
                }
            ))    
    };

    useEffect(() => {
        if (routeParams.bookId) {
            fetch(getSingleBookAdapter())
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                    // setBookInformation(data);
                })
        }
    }, []);

    useEffect(() => {
        handleBulkInput(bookInformation);
    }, [bookInformation]);

    return (
        <>
            <h1>Add Your Book</h1>
            <form className='createBookForm' onSubmit={handleFormSubmit}>
                <div className='inputFields'>
                    <TextInput 
                        type='text'
                        placeholder='title here'
                        label='Title'
                        id='title'
                    />
                    <TextInput 
                        type='text'
                        placeholder='language here...'
                        label='Language'
                        id='language'
                    />
                    <TextInput 
                        type='text'
                        placeholder='name of the author here...'
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
                        placeholder='ex. 2005'
                        label='Publishing Year'
                        id='publishingYear'
                    />
                </div>
                
                <div className='cover'>
                    <TextInput 
                        type='text'
                        placeholder='description here...'
                        label='Description'
                        id='description'
                        textarea
                    />
                  
                    <br />
                    <div className='addCover'>
                        {selectedImage && (
                            <div className='container'>
                                <img
                                    alt="cover"
                                    width={"250px"}
                                    className='imageCover'
                                    src={URL.createObjectURL(selectedImage)}
                                />
                                
                                <button className='removeButton' onClick={() => setSelectedImage(null)}>{remove}</button>
                            </div>
                        )}

                        <br />
                        <label htmlFor='file-upload' className='custom-file-upload'>
                            <input
                                type="file"
                                id='file-upload'
                                className='buttonChooseFile'
                                name="myImage"
                                onChange={(event) => {
                                console.log(event.target.files[0]);
                                setSelectedImage(event.target.files[0]);
                            }}
                            />
                        </label>
                    </div>
                </div>
                <div className='button'>
                    <button className='addButton'>{addButton}</button>
                </div>
            </form>
        </>
    )
}

export default CreateBook;