import React from "react";
import BookItem from "../BookItem/BookItem"

const BookList = ({ bookList, setList, handleOnBookDelete, isBookOwner }) => {

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
