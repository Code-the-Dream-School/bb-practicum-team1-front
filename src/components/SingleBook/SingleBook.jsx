import React, {useContext, useParams, useEffect, useState} from 'react';
import Message from '../images/message.png';
import Ghosts from '../images/ghosts.png';
import Adults from '../images/13plus.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { Link } from 'react-router-dom';
import { SessionContext } from '../../App';
import { getSingleBookAdapter } from '../../adapters/book-adapters';

const SingleBook = ({ item, bookId }) => {
  const routeParams = useParams();
  const { SessionObject } = useContext(SessionContext);
  const [bookInformation, setBookInformation] = useState({});
    // const adult = item.ageRange === 'adults';
    // const noImg = item.imageURL === false;
    // const status = item.status === 'open';
    // const image = item.imageURL;
// console.log('this is item in single book', item)
// console.log('this is App SessionObject', SessionObject)

useEffect(async () => {
  if (routeParams.bookId) {
      const newBook = await getSingleBookAdapter(routeParams.bookId);
      setBookInformation(newBook);
  }
}, [routeParams.bookId]);

// console.log('this is sessionContext', SessionContext)
    return (
      <div className='book-item-single'>
        <p className='kidsAdults-single'>
          {/* {adult ? <img src={Adults} alt="Adults" title='Not appropriate for under 13 years old'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> } */}
        </p>
        {/* {noImg ? <img src={NoPic} alt="No_Picture_available" className='coverImage-single' /> : <img src={image} alt="Cover image" className='coverImage-single' />} */}
        <div className="book-item-body-single">
          <div>
            <p className='titleAndYear-single'>
              {/* {item.title} ({item.publishingYear}) */}
            </p>
            {/* <a href={item.description} className='link-to-owner-single' data-id='Contact the owner'><img src={Message} alt="message_me" /></a> */}
          </div>
          {/* <p className='description-single'>{item.description}</p> */}
          {/* <p className='author-p-single'>Author: {item.author}</p> */}
          {/* <p className='lang-p-single'>Language: {item.language}</p> */}
          {/* <p className='genre-p-single'>Genre: {item.genre}</p> */}
          
        </div>
    </div>
  );
};

export default SingleBook;