import { useState, useEffect, useContext } from "react";
import './Profile.scss'
import { getAllBooksOwnerAdapter } from "../../adapters/book-adapters";
import { SessionContext } from "../../App";
import { PagePagination } from "../PagePagination/Pagination";



const ProfilePage = () => {
    const [usersBooks, setUsersBooks] = useState([]);

    const fetchUserBooks = async () => {
       const booksData = await getAllBooksOwnerAdapter()
       setUsersBooks(booksData.books)
    }


    useEffect( () => {
        fetchUserBooks()
    }, [])

    const {sessionObject} = useContext(SessionContext)

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
          <div className="books">
          <PagePagination books={usersBooks}/>
          </div>
        </div>

      );
}

export default ProfilePage;