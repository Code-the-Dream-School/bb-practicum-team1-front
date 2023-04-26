import { useState, useEffect, useContext } from "react";
import BookList from "../BookList/BookList";
import './Profile.scss'
import { getAllBooksOwnerAdapter } from "../../adapters/book-adapters";
import { SessionContext } from "../../App";
import { PagePagination } from "../PagePagination/Pagination";
import { loginAdapter } from "../../adapters/auth-adapters";
import { Login } from "../LoginPage/LoginPage";

const ProfilePage = ({myProfile = false}) => {
    const [userData, setUserData] = useState({});
    const [usersBooks, setUsersBooks] = useState([]);
    const fetchUserBooks = async () => {
       const booksData = await getAllBooksOwnerAdapter()
       setUsersBooks(booksData.books)
    }
    const fetchUser = async () => {
      const userData = await loginAdapter()
      setUserData(userData.user)
    }

    useEffect( () => {
        fetchUserBooks()
        fetchUser()
    }, [])

    const {sessionObject} = useContext(SessionContext)
    console.log(sessionObject)


    return (
        <div className="Profile">
          <h1>My Profile</h1>
          <BookList bookList={usersBooks} />
          <Login setSessionObject={userData} />
          <PagePagination bookList={usersBooks}/>
        </div>
      );
}

export default ProfilePage;