import React from 'react';
import './_BookItem.scss';

const BookItem = ({ item }) => {
    return (
        <li className='book-item'>
            <div>{item.title}</div>
            <div>{item.language}</div>
            <div>{item.ageRange}</div>
            <div>{item.publishingYear}</div>
            <div>{item.status}</div>
            <div>{item.image}</div>
            <div>{item.description}</div>
            <div>{item.genre}</div>
            
        </li>
    );
};

export default BookItem;