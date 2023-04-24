import React from 'react';
import Message from '../images/message.jpg';
import Ghosts from '../images/ghosts.png';
import Adults from '../images/13plus.png';
import NoPic from '../images/Image-Not-Available.png';
// import Available from '../images/available.jpg';
import ZeroPlus from '../images/zeroPlus.png';
// import Unavailable from '../images/unavailable.jpg';
import { Link } from 'react-router-dom';

const BookItem = ({ item }) => {
    const adult = item.ageRange === 'adults';
    const noImg = item.imageURL === false;
    const status = item.status === 'open';
    const image = item.imageURL;
    console.log('what is in item: ', item)

    return (
      <div className='book-item'>
        <p className='kidsAdults'>
          {adult ? <img src={Adults} alt="Adults" title='Not appropriate for kids'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
        </p>
        <span className={status ? 'available' : 'unavailable'}>
          <Link to="/books/:bookId" className={status ? 'linkToAvailableBook' : 'linkToUnavailableBook'} data-id={status ? 'Press to open' : 'Borrowed'}>
            {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage' /> : <img src={item.imageURL} alt="Cover image" className='coverImage' />}
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
            <p className='genre-paragraph'>Language: {item.language}</p>
            <p className='genre-paragraph2'>Genre: {item.genre}</p>
          </div>
        </div>
    </div>
  );
};

export default BookItem;