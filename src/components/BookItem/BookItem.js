import React from 'react';
import Message from '../images/message.png';
import Adults from '../images/13plus.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { Link } from 'react-router-dom';

const BookItem = ({ item }) => {
    const adult = item.ageRange === 'adults';
    const noImg = item.imageURL === false;
    const status = item.status === 'open';
    const image = item.imageURL;

    return (
      <div className='book-item'>
        <p className='kidsAdults'>
          {adult ? <img src={Adults} alt="Adults" title='Not appropriate for under 13 years old'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
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
            <Link to={`/chat/${item.owner._id}`} className='link-to-owner' data-id='Contact the owner'><img src={Message} alt="message_me" /></Link>
          </div>
          <p className='bookDescription'>{item.description}</p><br />
          <div className='imgAndLanguage'>
            <p className='lang-p'>Language: {item.language}</p>
            <p className='genre-p'>Genre: {item.genre}</p>
            <p className='author-p'>Author: {item.author}</p>
          </div>
        </div>
    </div>
  );
};

export default BookItem;