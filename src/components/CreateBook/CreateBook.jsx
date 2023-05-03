import React, { useState, useEffect, useContext } from 'react'
import DropdownInput from '../inputs/DropdownInput'
import TextInput from '../inputs/TextInput'
import { useParams } from 'react-router-dom'
import Book from './book-solid.svg'
import {
    createBookAdapter,
    getSingleBookAdapter,
    updateBookAdapter,
} from '../../adapters/book-adapters'
import { InputContext } from '../../App'
import { LoadingContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const addButton = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </svg>
)
var remove = '\u2718'

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

const CreateBook = ({ bookId }) => {
    const navigate = useNavigate()

    const { loading, setLoading } = useContext(LoadingContext)

    const { inputs, handleBulkInput } = useContext(InputContext)

    // placeholder for book update
    const [bookInformation, setBookInformation] = useState({})

    const [selectedImage, setSelectedImage] = useState(null)

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        console.log('create book inputs', inputs)

        bookId
            ? updateBookAdapter(
                  {
                      id: bookId,
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
              )
            : createBookAdapter(
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
              )
        setLoading(false)
        navigate('/')
    }

    useEffect(() => {
        let newBook
        if (bookId) {
            setLoading(true)
            newBook = async () => {
                await getSingleBookAdapter(bookId)
            }
            setBookInformation(newBook)
        }
        setLoading(false)
    }, [bookId])

    useEffect(() => {
        handleBulkInput(bookInformation)
    }, [bookInformation])

    return (
        <>
            <h1 className="h1-createBook">
                Your{' '}
                {
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                }{' '}
                here
            </h1>
            <form className="createBookForm" onSubmit={handleFormSubmit}>
                <div className="inputFields">
                    <TextInput
                        type="text"
                        placeholder="title here"
                        label="Title"
                        id="title"
                        className="title"
                        isRequired
                    />
                    <TextInput
                        type="text"
                        placeholder="language here..."
                        label="Language"
                        id="language"
                        isRequired
                    />
                    <TextInput
                        type="text"
                        placeholder="name of the author here..."
                        label="Author"
                        id="author"
                        isRequired
                    />
                    <DropdownInput
                        label="Age Range"
                        id="ageRange"
                        options={optionsAge}
                        isRequired
                    />
                    <DropdownInput
                        label="Status"
                        id="status"
                        options={optionsStatus}
                        isRequired
                    />
                    <DropdownInput
                        label="Genre"
                        id="genre"
                        options={optionsGenre}
                        isRequired
                    />
                    <TextInput
                        type="text"
                        placeholder="ex. 2005"
                        label="Publishing Year"
                        id="publishingYear"
                        isRequired
                    />
                </div>

                <div className="cover">
                    <TextInput
                        type="text"
                        placeholder="description..."
                        label="Description"
                        id="description"
                        textarea
                        isRequired
                    />

                    <br />
                    <div className="addCover">
                        {selectedImage && (
                            <div className="container">
                                <img
                                    alt="cover"
                                    width={'250px'}
                                    className="imageCover"
                                    src={URL.createObjectURL(selectedImage)}
                                />

                                <button
                                    className="removeButton"
                                    onClick={() => setSelectedImage(null)}
                                    title="Remove"
                                >
                                    {remove}
                                </button>
                            </div>
                        )}

                        <br />
                        <label
                            htmlFor="file-upload"
                            className="custom-file-upload"
                            title="Press to upload cover"
                        >
                            <input
                                type="file"
                                id="file-upload"
                                className="buttonChooseFile"
                                name="myImage"
                                onChange={(event) => {
                                    console.log(event.target.files[0])
                                    setSelectedImage(event.target.files[0])
                                }}
                            />
                        </label>
                    </div>
                </div>
                <div className="button">
                    <button className="addButton" title="Press to Add">
                        {addButton}
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateBook
