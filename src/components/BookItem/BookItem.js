import React, { useContext, useState } from 'react';
import { SessionContext } from '../../App';
import Message from '../images/message.png';
import Adults from '../images/18plus1.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { Link } from 'react-router-dom';
import { deleteBookAdapter, updateBookAdapter } from '../../adapters/book-adapters';

const BookItem = ({ item, handleOnBookDelete, isBookOwner }) => {
  const sessionObject = useContext(SessionContext);
  const adult = item.ageRange === 'adults';
  const status = item.status === 'open';
  const image = item.imageLink;

  const [savedItem, setSavedItem] = useState(item);

  console.log(savedItem);

  const deleteBook = async () => {
    if (savedItem._id) {
      const newList = await deleteBookAdapter(savedItem._id);
      if (handleOnBookDelete) {
        handleOnBookDelete(savedItem._id);
      }
    }
  }

  const borrowBook = () => {
    borrowReturnBook('borrowed');
  }

  const returnBook = () => {
    borrowReturnBook('open');
  }

  const borrowReturnBook = (status) => {
    if (savedItem && savedItem._id) {
      let bookParams = {};
      bookParams.id = savedItem._id;
      bookParams.status = status;

      updateBookAdapter(bookParams, undefined).then(resp => {
        console.log(resp);
        if (resp?.book) {
          item.status = resp.status; 
          setSavedItem(item);
        }
      });
    }
  }

  return (
    <div className='book-item'>
      <p className='kidsAdults'>
        {adult ? <img src={Adults} alt="Adults" title='Not appropriate for under 18 years old'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
      </p>
      <span className={status ? 'available' : 'unavailable'}>
        <Link to={`/books/${item._id}`} className={status ? 'linkToAvailableBook' : 'linkToUnavailableBook'} data-id={status ? 'Press to open' : 'Borrowed'}>
          <div className='cover-container'>{image ? <img src={image} alt="Cover image" className='coverImage' /> : <img src={NoPic} alt="No_Picture_available" className='coverImage' />}</div>
        </Link>
      </span>
      <div className="book-item-body">
        <div>
          <p className='titleAndYear'>
            <Link to={`/books/${item._id}`}>{item.title} </Link> 
            ({item.publishingYear})
          </p>
          { sessionObject?.sessionObject?.user ?
            <Link to={`/chat/${item?.owner?._id}`} className='link-to-owner' data-id='Contact the owner'><img src={Message} alt="message_me" /></Link> :
            null
          }
          </div>
        <p className='bookDescription'>{item.description}</p><br />
        <div className='imgAndLanguage'>
          <p className='lang-p'>Language: {item.language}</p>
          <p className='genre-p'>Genre: {item.genre}</p>
          <p className='author-p'>Author: {item.author}</p>
        </div>
      </div>


      {/* delete and edit buttons for the owner of the book on Profile Page*/}
      {isBookOwner ? 
        <div className='edit-and-delete-btn'>
          <button 
            className='remove-btn' 
            data-id='delete the book'
            type='button'
            onClick={() => deleteBook(item._id)}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></button>
          <button className='edit-button'><Link to={`/books/edit/${item._id}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg></Link></button>
          {sessionObject?.sessionObject?.user && item.status === 'borrowed' ?
            <button type='button' value="Return book" className='edit-button' onClick={returnBook}><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 479 511.83"><path d="M219.08 0h197.57v226.67c-.36 6.16-8.32 6.3-16.92 5.92H216.16c-11.88 0-21.6 9.72-21.6 21.62 0 11.89 9.72 21.61 21.6 21.61h191.48v-23h16.91v29.24c0 5.32-4.34 9.66-9.68 9.66H217.01c-27.07 0-38.91-9.57-38.91-30.97V40.98C178.1 18.44 196.53 0 219.08 0zM6.73 300.41h82.33c3.7 0 6.73 3.03 6.73 6.73v159.27c0 3.71-3.03 6.73-6.73 6.73H6.73c-3.7 0-6.73-3.02-6.73-6.73V307.14c0-3.7 3.03-6.73 6.73-6.73zm110.4 158.79V315.82c70.69 1.65 84.62-1.24 147.39 40.35l50.09 1.17c22.64 1.89 33.98 25.15 11.61 39.74-17.88 12.46-41.03 11.19-64.73 8.51-16.36-1.18-17.59 20.81-.49 21.29 5.92.6 12.4-.64 18.04-.52 29.65.66 54.2-4.44 69.69-27.51l7.92-17.35 75.37-35.21c37.57-11.41 63.15 28.21 35.06 54.69-54.88 38.01-110.99 69.04-168.2 93.81-41.69 24.05-82.79 22.24-123.34-2.87l-58.41-32.72z"/></svg></button>
            : null
          }
          {sessionObject?.sessionObject?.user && item.status === 'open' ?
            <button type='button' value="Borrow book" className='remove-btn' onClick={borrowBook}><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 479 511.83"><path d="M219.08 0h197.57v226.67c-.36 6.16-8.32 6.3-16.92 5.92H216.16c-11.88 0-21.6 9.72-21.6 21.62 0 11.89 9.72 21.61 21.6 21.61h191.48v-23h16.91v29.24c0 5.32-4.34 9.66-9.68 9.66H217.01c-27.07 0-38.91-9.57-38.91-30.97V40.98C178.1 18.44 196.53 0 219.08 0zM6.73 300.41h82.33c3.7 0 6.73 3.03 6.73 6.73v159.27c0 3.71-3.03 6.73-6.73 6.73H6.73c-3.7 0-6.73-3.02-6.73-6.73V307.14c0-3.7 3.03-6.73 6.73-6.73zm110.4 158.79V315.82c70.69 1.65 84.62-1.24 147.39 40.35l50.09 1.17c22.64 1.89 33.98 25.15 11.61 39.74-17.88 12.46-41.03 11.19-64.73 8.51-16.36-1.18-17.59 20.81-.49 21.29 5.92.6 12.4-.64 18.04-.52 29.65.66 54.2-4.44 69.69-27.51l7.92-17.35 75.37-35.21c37.57-11.41 63.15 28.21 35.06 54.69-54.88 38.01-110.99 69.04-168.2 93.81-41.69 24.05-82.79 22.24-123.34-2.87l-58.41-32.72z"/></svg></button>      
            : null
          }
        </div> : null
      }
    </div>  
  );
};

export default BookItem;