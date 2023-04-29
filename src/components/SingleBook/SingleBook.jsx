import React, {useContext, useEffect, useState} from 'react';
import Message from '../images/message.png';
import Ghosts from '../images/ghosts.png';
import Adults from '../images/13plus.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { Link } from 'react-router-dom';
import { getSingleBookAdapter } from '../../adapters/book-adapters';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const routeParams = useParams();
  console.log("param", routeParams)
  const [bookInformation, setBookInformation] = useState({});
  console.log('book info', bookInformation)
    const adult = bookInformation.ageRange === 'adults';
    const description = bookInformation.description;
    const noImg = bookInformation.imageURL === false;
    const status = bookInformation.status === 'open';
    const image = bookInformation.imageURL;
    const language = bookInformation.language;
    const author = bookInformation.author;
    const title = bookInformation.title;
    const genre = bookInformation.genre;
    const publishingYear = bookInformation.publishingYear;

  useEffect(async () => {
    if (routeParams.bookId) {
        const newBook = await getSingleBookAdapter(routeParams.bookId);
        setBookInformation(newBook);
    }
  }, [routeParams.bookId]);

    return (
      <div className='book-item-single'>
        <p className='kidsAdults-single'>
          {adult ? <img src={Adults} alt="Adults" title='Not appropriate for under 13 years old'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
        </p>
        {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage-single' /> : <img src={image} alt="Cover image" className='coverImage-single' />}
        <div className="book-item-body-single">
          <div>
            <p className='titleAndYear-single'>
              {title} ({publishingYear})
            </p>
            <a href={description} className='link-to-owner-single' data-id='Contact the owner'><img src={Message} alt="message_me" /></a>
          </div>
          <p className='description-single'>{description}</p> 
          <p className='author-p-single'>Author: {author}</p> 
          <p className='lang-p-single'>Language: {language}</p>
          <p className='genre-p-single'>Genre: {genre}</p>
          
        </div>
    </div>
  );
};

export default SingleBook;