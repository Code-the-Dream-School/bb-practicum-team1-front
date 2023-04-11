import React, { useMemo, useState } from 'react';
import BookItem from '../BookItem/BookItem';

const BookList = ({ bookList }) => {
    return (
        <ul>
            {bookList.map((item) => 
                <BookItem 
                    item={item} 
                />
            )}
        </ul>
    );
};

export default BookList;