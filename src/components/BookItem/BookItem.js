import React, { useContext, useEffect } from 'react';
import Message from '../images/message.png';
import Adults from '../images/18plus1.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { Link } from 'react-router-dom';
import { deleteBookAdapter } from '../../adapters/book-adapters';
import { SessionContext /* <-- this is createContet()*/ } from '../../App'

const BookItem = ({ item, setList }) => {
  const adult = item.ageRange === 'adults';
  const noImg = item.imageLink === false || item.imageURL === false || item.image === false;
  const status = item.status === 'open';
  const image = item.imageLink;
  const { sessionObject, setSessionObject } = useContext(SessionContext);
  console.log('item is', item)
  console.log('sessionObject', sessionObject)
  console.log('item owner id: ', item.owner._id)
  const userObject = sessionObject.user.userId;
  const userBook = item.owner._id;

  {/* targeting a book using useParams for deleting or editing purposes */}
  const deleteBook = async () => {
    if (item._id) {
      const newList = await deleteBookAdapter(item._id);
      setList(newList);
      console.log('deleted', newList)
    }
  }

  return (
    <div className='book-item'>
      <p className='kidsAdults'>
        {adult ? <img src={Adults} alt="Adults" title='Not appropriate for under 18 years old'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
      </p>
      <span className={status ? 'available' : 'unavailable'}>
        <Link to={`/books/${item._id}`} className={status ? 'linkToAvailableBook' : 'linkToUnavailableBook'} data-id={status ? 'Press to open' : 'Borrowed'}>
          {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage' /> : <img src={image} alt="Cover image" className='coverImage' />}
        </Link>
      </span>
      <div className="book-item-body">
        <div>
          <p className='titleAndYear'>
            <Link to={`/books/${item._id}`}>{item.title} </Link> 
            ({item.publishingYear})
          </p>
          <a href={item.description} className='link-to-owner' data-id='Contact the owner'><img src={Message} alt="message_me" /></a>
        </div>
        <p className='bookDescription'>{item.description}</p><br />
        <div className='imgAndLanguage'>
          <p className='lang-p'>Language: {item.language}</p>
          <p className='genre-p'>Genre: {item.genre}</p>
          <p className='author-p'>Author: {item.author}</p>
        </div>
      </div>


      {/* delete and edit buttons for the owner of the book */}
     {
      userObject === userBook ? (
        <div className='edit-and-delete-btn'>
        <button 
          className='remove-btn' 
          type='button'
          onClick={() => deleteBook(userBook)}
        >Remove</button>
        <button className='edit-button'><Link to={`/books/edit/${item._id}`}>Edit</Link></button>
      </div>
      ) :('')
     }
    </div>  
  );
};

export default BookItem;