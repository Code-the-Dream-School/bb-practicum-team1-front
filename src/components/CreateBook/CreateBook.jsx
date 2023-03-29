import React, {useState} from 'react';
import SelectDropdown from './SelectDropdown';
import './_CreateBook.scss';

const CreateBook = ({ bookId }) => {
    const [bookTitle, setBookTitle] = useState('');
    const [language, setLanguage] = useState('');

    const handleFormSubmit = () => {

        return (
            console.log('this is the submit form')
        )
    }

    const loadBookData = () => {
        return (
            console.log('this is the loadBookData')
        )
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='bookTitle' className='label'>Title: </label>
                <input 
                    id='bookTitle'
                    type='text'
                    name='bookTitle'
                    value={bookTitle}
                    onChange={loadBookData}
                    required={true}
                    className='inputTitle'
                />

                <label htmlFor='language' className='label'>Language: </label>
                <input 
                    id='language'
                    type='text'
                    name='language'
                    value={language}
                    onChange={loadBookData}
                    required={true}
                    className='inputTitle'
                />
                <SelectDropdown />
            </form>
        </>
    )
}

export default CreateBook;