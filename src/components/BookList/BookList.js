import React from "react";
import BookItem from "../BookItem/BookItem"

const BookList = ({ bookList }) => {
    
    return (
        <ul className='cardsList'>
            {bookList.map((item) => 
                <BookItem 
                    key={item.ISBN || `${item.title}|${item.author}`}
                    item={item} 
                />
            )}
        </ul>
    );
}

export default BookList;
