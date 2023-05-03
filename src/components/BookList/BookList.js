import React, { useState } from "react";
import BookItem from "../BookItem/BookItem"

const BookList = ({ bookList }) => {
    const [list, setList] = useState([]);

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
