import { useState, useEffect } from "react";
import BookList from "../BookList/BookList";

//Get userid from url then use UserAdapter to get the user

const bookList = [
    {
        title: 'Cinderella',
        language: 'English',
        ageRange: 'kids',
        publishingYear: 2022,
        status: 'open',
        image: true,
        description: 'Colorful book with a lot of beautiful pictures',
        genre: 'Literary Fiction', 
        author: 'Charles Perrault',
    },
    {
        title: 'Cinderella',
        language: 'English',
        ageRange: 'kids',
        publishingYear: 2022,
        status: 'open',
        image: false,
        description: 'Colorful book with a lot of beautiful pictures',
        genre: 'Literary Fiction', 
        author: 'Charles Perrault',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'War and Peace',
        language: 'Russian',
        ageRange: 'adults',
        publishingYear: 1988,
        status: 'borrowed',
        image: true,
        description: 'The classic of world literature',
        genre: 'Graphic Novel', 
        author: 'Leo Tolstoy',
    },
    {
        title: 'Bible',
        language: 'Chinese',
        ageRange: 'adults',
        publishingYear: 1901,
        status: 'open',
        image: false,
        description: 'The Christian scriptures, consisting of the Old and New Testaments',
        genre: 'Religion & Spirituality', 
        author: 'unknown',
    },
    {
        title: 'Bible',
        language: 'Chinese',
        ageRange: 'adults',
        publishingYear: 1901,
        status: 'open',
        image: false,
        description: 'The Christian scriptures, consisting of the Old and New Testaments',
        genre: 'Religion & Spirituality', 
        author: 'unknown',
    },
    {
        title: 'Bible',
        language: 'Chinese',
        ageRange: 'adults',
        publishingYear: 1901,
        status: 'open',
        image: false,
        description: 'The Christian scriptures, consisting of the Old and New Testaments',
        genre: 'Religion & Spirituality', 
        author: 'unknown',
    },
    {
        title: 'Bible',
        language: 'Chinese',
        ageRange: 'adults',
        publishingYear: 1901,
        status: 'open',
        image: false,
        description: 'The Christian scriptures, consisting of the Old and New Testaments',
        genre: 'Religion & Spirituality', 
        author: 'unknown',
    },
];

const testUser = {
    userName: "jhonnyD",
    givenName: "John",
    familyName: "Doe",
    address: "839 Brookhannah Ct, Fuquay-Varina NC",
    _id: 1
}

const ProfilePage = ({myProfile = false}) => {
    const [user, setUser] = useState(null);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {user, BookList, } = await getUserInfo();
    //         setUser(user);
    //         BookList={BookList}
    //     }
    // })
return(
    <div>
        <h2>Hello {testUser.userName}</h2>
        <h3>Addres {testUser.address}</h3>
        <BookList bookList={bookList} />
    </div>
)
    
}

export default ProfilePage;