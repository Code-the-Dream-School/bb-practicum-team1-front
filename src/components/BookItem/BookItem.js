import React from 'react';
import Message from '../images/message.png';
import Ghosts from '../images/ghosts.png';
import Adults from '../images/18plus.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { Link } from 'react-router-dom';

const BookItem = ({ item }) => {
    const adult = item.ageRange === 'adults';
    const noImg = item.image === false;
    const status = item.status === 'open';

    return (
      <div className='book-item'>
        <p className='kidsAdults'>
          {adult ? <img src={Adults} alt="Adults" title='Not appropriate for kids'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
        </p>
        <span className={status ? 'available' : 'unavailable'}>
          <Link to="/books/:bookId" className={status ? 'linkToAvailableBook' : 'linkToUnavailableBook'} data-id={status ? 'Press to open' : 'Borrowed'}>
            {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage' /> : <img src={Ghosts} alt="Cover image" className='coverImage' />}
          </Link>
        </span>
        <div className="book-item-body">
          <div>
            <p className='titleAndYear'>
              {item.title} ({item.publishingYear})
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
    </div>
  );
};

export default BookItem;