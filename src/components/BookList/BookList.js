import React from 'react';
import BookItem from '../BookItem/BookItem';

const BookList = ({ bookList }) => {
    console.log('this is item in bookList', bookList);
    return (
        <ul className='cardsList'>
            {bookList.map((item) => 
                <BookItem 
                    key={item.title}
                    item={item} 
                />
            )}
        </ul>
    );
};

export default BookList;