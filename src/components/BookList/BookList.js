import React, { useState } from "react";
import BookItem from "../BookItem/BookItem"

const BookList = ({ bookList, setList }) => {
    
console.log("book list is in BookList:", bookList)
    return (
        <ul className='cardsList'>
            {bookList.map((item) => 
                <BookItem 
                    key={item.ISBN || `${item.title}|${item.author}`}
                    item={item} 
                    setList={setList}
                />
            )}
        </ul>
    );
}

export default BookList;
