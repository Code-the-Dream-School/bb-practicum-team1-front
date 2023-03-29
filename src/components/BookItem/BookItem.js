import React from 'react';

const BookItem = ({ item }) => {
    return (
        <li>
            {item.title},
            {item.language},
            {item.ageRange},
            {item.publishingYear},
            {item.status},
            {item.image},
            {item.description},
            {item.genre},
            {item.author}
        </li>
    );
};

export default BookItem;