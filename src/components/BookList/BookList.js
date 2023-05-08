import React from "react";
import BookItem from "../BookItem/BookItem"

const BookList = ({ bookList, handleOnBookDelete, isBookOwner }) => {

    return (
        <ul className='cardsList'>
            {bookList.map((item) => 
                <BookItem 
                    key={item.ISBN || `${item.title}|${item.author}`}
                    item={item} 
                    handleOnBookDelete={handleOnBookDelete}
                    isBookOwner={isBookOwner}
                />
            )}
        </ul>
    );
}

export default BookList;
