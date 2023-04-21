import React from 'react';
import Message from '../images/message.jpg';
import Ghosts from '../images/ghosts.png';
import Adults from '../images/18plus.png';
import NoPic from '../images/Image-Not-Available.png';
// import Available from '../images/available.jpg';
import ZeroPlus from '../images/zeroPlus.png';
import Unavailable from '../images/unavailable.jpg';
import { Link } from 'react-router-dom';

const SingleBook = ({ item }) => {

    const adult = item.ageRange === 'adults';
    const noImg = item.image === false;
    const status = item.status === 'open';

    return (
      <div className='book-item-single'>
        <p className='kidsAdults-single'>
          {adult ? <img src={Adults} alt="Adults" title='Not appropriate for kids'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
        </p>
        {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage-single' /> : <img src={Ghosts} alt="Cover image" className='coverImage-single' />}
        <div className="book-item-body-single">
          <div>
            <p className='titleAndYear-single'>
              {item.title} ({item.publishingYear})
            </p>
            <a href={item.description} className='link-to-owner-single' data-id='Contact the owner'><img src={Message} alt="message_me" /></a>
          </div>
          <p className='description-single'>{item.description}</p>
          <p className='author-p-single'>Author: {item.author}</p>
          <p className='lang-p-single'>Language: {item.language}</p>
          <p className='genre-p-single'>Genre: {item.genre}</p>
          
        </div>
    </div>
  );
};

export default SingleBook;