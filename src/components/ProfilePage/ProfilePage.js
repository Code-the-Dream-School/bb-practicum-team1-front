import { useState, useEffect, useContext } from "react";
import { getAllBooksOwnerAdapter } from "../../adapters/book-adapters";
import { SessionContext } from "../../App";
import { PagePagination } from "../PagePagination/Pagination";

const ProfilePage = () => {
    const [usersBooks, setUsersBooks] = useState([]);

    const fetchUserBooks = async () => {
       const booksData = await getAllBooksOwnerAdapter()
       setUsersBooks(booksData.books)
    }

    const handleOnBookDelete = (bookId) => {
      const newState = [...usersBooks].filter((bookElement) => bookElement._id !== bookId);
      setUsersBooks(newState)
    }

    useEffect( () => {
        fetchUserBooks()
    }, [])

    const {sessionObject} = useContext(SessionContext)
console.log('sessionObj', sessionObject)
    return (
        <div className="Profile">
          <div className="user-container">
            <h1 className="header-profile">{sessionObject.user.givenName}'s  Profile:</h1>
            <div className="user">
              <div className="user-name"><span>Name: </span>{sessionObject.user.givenName} {sessionObject.user.familyName}</div>
              <div className="username"><span>Username: </span>{sessionObject.user.username}</div>
              <div className="user-address"><span>Address: </span>{sessionObject.user.address}</div>
              <div className="user-dob"><span>Date of Birth: </span>{new Date(`${sessionObject.user.dateOfBirth}`).toLocaleDateString()}</div>
            </div>
          </div>
          <div className="books">
          <div className="pagination-container">
            <PagePagination 
              books={usersBooks} 
              handleOnBookDelete={handleOnBookDelete}
              isBookOwner={true}
            />
          </div>
          </div>
        </div>
      );
}

export default ProfilePage;