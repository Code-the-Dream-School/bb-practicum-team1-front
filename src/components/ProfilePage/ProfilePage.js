import { useState, useEffect, useContext } from "react";
import BookList from "../BookList/BookList";
import './Profile.scss'
import { getAllBooksOwnerAdapter } from "../../adapters/book-adapters";
import { SessionContext } from "../../App";
import { PagePagination } from "../PagePagination/Pagination";



const ProfilePage = ({myProfile = false}) => {
    const [usersBooks, setUsersBooks] = useState([]);

    const fetchUserBooks = async () => {
       const booksData = await getAllBooksOwnerAdapter()
       setUsersBooks(booksData.books)
    }


    useEffect( () => {
        fetchUserBooks()
    }, [])

    const {sessionObject} = useContext(SessionContext)
    console.log(sessionObject)

    return (
        <div className="Profile">
          <h1>My Profile</h1>
          <div className="user">
            {sessionObject.user.givenName}<br/>
            {sessionObject.user.familyName}<br/>
            {sessionObject.user.username}<br/>
            {sessionObject.user.address}<br/>
            {sessionObject.user.dateOfBirth}<br/>
          </div>
          <BookList bookList={usersBooks} />
          <PagePagination/>
        </div>

      );
}

export default ProfilePage;