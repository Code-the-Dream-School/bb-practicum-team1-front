import React, { useContext, useEffect, useState } from 'react';
import Message from '../images/message.png';
import Adults from '../images/18plus1.png';
import NoPic from '../images/Image-Not-Available.png';
import ZeroPlus from '../images/zeroPlus.png';
import { getSingleBookAdapter } from '../../adapters/book-adapters';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LoadingContext } from '../../App'

const SingleBook = () => {
  const routeParams = useParams();
  const [bookInformation, setBookInformation] = useState({});
  const adult = bookInformation.ageRange === 'adults';
  const description = bookInformation.description;
  const image = bookInformation.imageLink;
  const language = bookInformation.language;
  const author = bookInformation.author;
  const title = bookInformation.title;
  const genre = bookInformation.genre;
  const publishingYear = bookInformation.publishingYear;
  const { loading, setLoading } = useContext(LoadingContext)

  // getting the single book using useParams
  const singleFetchedBook = async () => {
    if (routeParams.bookId) {
      setLoading(true)
      const newBook = await getSingleBookAdapter(routeParams.bookId);
      setLoading(false)
      setBookInformation(newBook);
    }
  }

  // displaying the book when the page refreshes
  useEffect(() => {
    singleFetchedBook();
  }, [routeParams.bookId]);

    return (
      <div className='container-single'>
        <div className='book-item-single'>
          <p className='kidsAdults-single'>
            {adult ? <img src={Adults} alt="Adults" title='Not appropriate for under 13 years old'/>  : <img src={ZeroPlus} alt="Kids" title='Kid friendly'/> }
          </p>
          {image ? <img src={image} alt="Cover image" className='coverImage-single' /> : <img src={NoPic} alt="No_Picture_available" className='coverImage-single' />}
          <div className="book-item-body-single">
            <div>
              <p className='titleAndYear-single'>
                {title} ({publishingYear})
              </p>
              <Link to={`/chat/${bookInformation?.owner?._id}`} className='link-to-owner' data-id='Contact the owner'><img src={Message} alt="message_me" /></Link>
            </div>
            <p className='description-single'>{description}</p> 
            <p className='author-p-single'>Author: {author}</p> 
            <p className='lang-p-single'>Language: {language}</p>
            <p className='genre-p-single'>Genre: {genre}</p>
          </div>
      </div>
    </div>
  );
};

export default SingleBook;
