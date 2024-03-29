import React, { useState, useEffect, useContext } from 'react'
import DropdownInput from '../inputs/DropdownInput'
import TextInput from '../inputs/TextInput'
import { useParams } from 'react-router-dom'
import AbstractModal from '../AbstractModal/AbstractModal'

import {
    createBookAdapter,
    getSingleBookAdapter,
    updateBookAdapter,
} from '../../adapters/book-adapters'
import { InputContext } from '../../App'
import { LoadingContext } from '../../App'
import ImageToggle  from '../ImageToggle/ImageToggle'

const addButton = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>
)

const optionsStatus = [
    { value: 'open', label: 'Open' },
    { value: 'borrowed', label: 'Borrowed' },
]

const optionsAge = [
    { value: 'kids', label: 'Kids' },
    { value: 'adults', label: 'Adults' },
]

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
    {
        value: 'Politics & Social Sciences',
        label: 'Politics & Social Sciences',
    },
    { value: 'Religion & Spirituality', label: 'Religion & Spirituality' },
    { value: 'Education & Teaching', label: 'Education & Teaching' },
    { value: 'Travel', label: 'Travel' },
    { value: 'True Crime', label: 'True Crime' },
    { value: 'Poetry', label: 'Poetry' },
    { value: 'Personal Growth', label: 'Personal Growth' },
]

const CreateBook = ({ urlButton, setUrlButton, modalIsOpen, setModalIsOpen }) => {
    const [openModal, setOpenModal] = useState(false);
    const routeParams = useParams();
    const { inputs, handleBulkInput } = useContext(InputContext);
    const bookId = routeParams.bookId
    const [bookInformation, setBookInformation] = useState({});
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedURL, setSelectedURL] = useState('' || undefined);
    const { loading, setLoading } = useContext(LoadingContext);

    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        setLoading(true);
        
        routeParams.bookId ? 
            await (updateBookAdapter( 
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
                    imageLink: selectedURL
                },
                selectedImage,           
            )) : await (createBookAdapter(
                {
                    title: inputs.title, 
                    language: inputs.language, 
                    ageRange: inputs.ageRange, 
                    publishingYear: inputs.publishingYear, 
                    status: inputs.status, 
                    description: inputs.description, 
                    genre: inputs.genre, 
                    author: inputs.author,
                    imageLink: selectedURL
                },
                selectedImage,
            )) 
            setModalIsOpen(true)
            handleBulkInput({
                title: '',
                language: '',
                author: '',
                ageRange: '',
                status: '',
                publishingYear: '',
                genre: '',
                description: '',
                imageLink:'',
            })     
            setSelectedImage('');
            setSelectedURL('');
            setLoading(false)
            setUrlButton(false);
    };

    const handleLoadBook = async () => {
        let newBook
        if (bookId) {
            setLoading(true)
            newBook = await getSingleBookAdapter(bookId)
            setBookInformation(newBook)
        }
        setLoading(false)
    }

    useEffect(() => {
        handleLoadBook()
    }, [bookId])

    useEffect(() => {
        handleBulkInput(bookInformation);
    }, [bookInformation]);

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
                            isRequired={true}
                        />
                        <TextInput 
                            type='text'
                            placeholder='language here...'
                            label='Language'
                            id='language'
                            isRequired={true}
                        />
                        <TextInput 
                            type='text'
                            placeholder='name of the author here...'
                            label='Author'
                            id='author'
                            isRequired={true}
                        />
                        <DropdownInput 
                            label = 'Age Range'
                            id = 'ageRange'
                            options={optionsAge}
                            isRequiredSelect={true}
                            showPlaceholder={true}
                        />
                        <DropdownInput 
                            label = 'Status'
                            id = 'status'
                            options={optionsStatus}
                            isRequiredSelect={true}
                            showPlaceholder={true}
                        />
                        <DropdownInput 
                            label = 'Genre'
                            id = 'genre'
                            options={optionsGenre}
                            isRequiredSelect={true}
                            showPlaceholder={true}
                        />
                        <TextInput 
                            type='text'
                            placeholder='ex. 2005'
                            label='Publishing Year'
                            id='publishingYear'
                            isRequired={true}
                        />
                    </div>
                    
                    <div className='cover'>
                        <TextInput 
                            type='text'
                            placeholder='description...'
                            label='Description'
                            id='description'
                            textarea
                            isRequired={true}
                        />
                        <br />
                        <ImageToggle 
                            selectedImage={selectedImage} 
                            setSelectedImage={setSelectedImage} 
                            selectedURL={selectedURL} 
                            setSelectedURL={setSelectedURL} 
                            urlButton={urlButton}
                            setUrlButton={setUrlButton}
                        />
                    </div>
                    
                    <div className='button'>
                        <button className='addButton' title='Press to Add' >{Object.keys(routeParams).length === 0 ? 'Create ' : 'Edit '}{addButton}</button>
                    </div>
                </form>
                
                {!openModal && 
                    <div className='modal-container'>
                        <AbstractModal 
                            modalId='abstractModal'
                            className='abstract-modal'
                            modalIsOpen={modalIsOpen}
                            onModalClose={() => setModalIsOpen(false)}
                            children='Success!'
                        />
                    </div>
                }
            </div>
        </>
    )
}

export default CreateBook
