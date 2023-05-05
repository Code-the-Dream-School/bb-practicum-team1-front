import React, { useState } from "react";
import BookItem from "../BookItem/BookItem"

const BookList = ({ bookList, setList, handleOnBookDelete, isBookOwner }) => {

    
console.log("book list is in BookList:", bookList)
    return (
        <ul className='cardsList'>
            {bookList.map((item) => 
                <BookItem 
                    key={item.ISBN || `${item.title}|${item.author}`}
                    item={item} 
                    setList={setList}
                    handleOnBookDelete={handleOnBookDelete}
                    isBookOwner={isBookOwner}
                />
            )}
        </ul>
    );
}

export default BookList;
