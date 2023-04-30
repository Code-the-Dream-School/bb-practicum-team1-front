import React, { useState, useEffect, useContext } from 'react';
import DropdownInput from '../inputs/DropdownInput';
import TextInput from '../inputs/TextInput';
import { useParams } from 'react-router-dom';
import { createBookAdapter, getSingleBookAdapter, updateBookAdapter } from '../../adapters/book-adapters';
import { InputContext } from '../../App';

const addButton = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>;
var remove = '\u2718';
var plus = '+';

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
    const [urlButton, setUrlButton] = useState(false);
    const routeParams = useParams();
    const { inputs, handleBulkInput } = useContext(InputContext);
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
                   
                },
                selectedImage              
            )) : (createBookAdapter(
                {
                    title: inputs.title, 
                    language: inputs.language, 
                    ageRange: inputs.ageRange, 
                    publishingYear: inputs.publishingYear, 
                    status: inputs.status, 
                    description: inputs.description, 
                    genre: inputs.genre, 
                    author: inputs.author,
                },
                selectedImage
            ))    
    };

    useEffect(async () => {
        if (routeParams.bookId) {
            const newBook = await getSingleBookAdapter(routeParams.bookId);
            setBookInformation(newBook);
        }
    }, [routeParams.bookId]);

    useEffect(async () => {
        handleBulkInput(bookInformation);
    }, []);
    // bookInformation - as a dependency array..?

    const handleURLToggle = () => {
        setUrlButton(!urlButton)
        return (
            <>
            {<p>test</p>}
            <TextInput type='text' placeholder='URL here...' label='URL link' id='urlField' className='urlField' />
            </>
        )
    }
    
    return (
        <>
            <h1 className='h1-createBook'>Your {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>} here</h1>
            <div className='container-create-form'>
                <form className='createBookForm' onSubmit={handleFormSubmit}>
                    <div className='inputFields'>
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
                            placeholder='description...'
                            label='Description'
                            id='description'
                            textarea
                        />
                        <br />
                        <div className='upload-or-link-cover'>
                            <p className='cover-upload'><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.09 122.88"><title>file-upload</title><path d="M64.64,13,86.77,36.21H64.64V13ZM42.58,71.67a3.25,3.25,0,0,1-4.92-4.25l9.42-10.91a3.26,3.26,0,0,1,4.59-.33,5.14,5.14,0,0,1,.4.41l9.3,10.28a3.24,3.24,0,0,1-4.81,4.35L52.8,67.07V82.52a3.26,3.26,0,1,1-6.52,0V67.38l-3.7,4.29ZM24.22,85.42a3.26,3.26,0,1,1,6.52,0v7.46H68.36V85.42a3.26,3.26,0,1,1,6.51,0V96.14a3.26,3.26,0,0,1-3.26,3.26H27.48a3.26,3.26,0,0,1-3.26-3.26V85.42ZM99.08,39.19c.15-.57-1.18-2.07-2.68-3.56L63.8,1.36A3.63,3.63,0,0,0,61,0H6.62A6.62,6.62,0,0,0,0,6.62V116.26a6.62,6.62,0,0,0,6.62,6.62H92.46a6.62,6.62,0,0,0,6.62-6.62V39.19Zm-7.4,4.42v71.87H7.4V7.37H57.25V39.9A3.71,3.71,0,0,0,61,43.61Z"/></svg> Cover (optional)</p>
                                <div className='center-cover-buttons'>
                                    {urlButton === false ? 
                                        <div className='addCover'>
                                            {selectedImage && (
                                                <div className='container'>
                                                    <img
                                                        alt="cover"
                                                        width={"250px"}
                                                        className='imageCover'
                                                        src={URL.createObjectURL(selectedImage)}
                                                    />
                                                    
                                                    <button className='removeButton' onClick={() => setSelectedImage(null)} title='Remove' >{remove}</button>
                                                </div>
                                            )}
                                            <br />
                                            <label htmlFor='file-upload' className='custom-file-upload' title='Press to upload cover'>
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
                                        </div> : <div className='url-field'>
                                                    <TextInput 
                                                        type='text' 
                                                        placeholder='URL here...' 
                                                        id='urlField' 
                                                    />
                                                    

                                                    {/* <div className='addCover'>
                                                        {selectedImage && (
                                                            <div className='container'>
                                                                <img
                                                                    alt="cover"
                                                                    width={"250px"}
                                                                    className='imageCover'
                                                                    src={URL.createObjectURL(selectedImage)}
                                                                />
                                                                
                                                                <button className='removeButton' onClick={() => setSelectedImage(null)} title='Remove' >{remove}</button>
                                                            </div>
                                                        )}
                                                        <br />
                                                        <label htmlFor='file-upload' className='custom-file-upload' title='Press to upload cover'>
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
                                                    </div> */}



                                                    {/* <button onClick={console.log('uploaded link')} className='plus-sign'>{plus}</button> */}
                                                </div>
                                    }
                                </div>
                            <button className='cover-toggle' onClick={handleURLToggle}>{urlButton ? 'Upload Cover Image Instead' : 'Provide URL instead'}</button>
                        </div>
                    </div>
                    <div className='button'>
                        <button className='addButton' title='Press to Add'>Add your {addButton}</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateBook;