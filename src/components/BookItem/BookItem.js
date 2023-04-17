import React from 'react';
import Message from './images/message.jpg';
import Ghosts from './images/ghosts.png';
import Adults from './images/18plus.png';
import NoPic from './images/picture-not-available.jpg';
import Available from './images/available.jpg';
import ZeroPlus from './images/zeroPlus.png';
import Unavailable from './images/unavailable.jpg';

const BookItem = ({ item }) => {
    const adult = item.ageRange === 'adults';
    const noImg = item.image === false;
    const status = item.status === 'open';
  
    return (
      <div className='book-item'>
        <p className='kidsAdults'>
          {adult ? <img src={Adults} alt="Adults" title='Not appropriate for kids'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
        </p>
        <a href={item.image} title='Press to open'>
          {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage' /> : <img src={Ghosts} alt="Cover image" className='coverImage' />}
        </a>
        <div className="book-item-body">
          <div>
            <p className='titleAndYear'>
              {item.title} ({item.publishingYear})
            </p>
            <a href={item.description} title='Contact the owner'><img src={Message} alt="message_me" /></a>
          </div>
          <p>{item.description}</p>
          <div className='imgAndLanguage'>
            {status ? <img src={Available} alt="Available" className='availability' /> : <img src={Unavailable} alt="Unavailable" className='availability'/>} 
            <p>Language: {item.language}</p>
          </div>
            <p className='genre'>Genre: {item.genre}</p>
        </div>
    </div>
  );
};

export default BookItem;