import { useState, useEffect } from "react";
import {ProfilePicture} from '../ProfilePage/ProfilePicture'
// import './StyledHeader.js'
import { catchErrors } from "./catchErrors";
import BookList from "../BookList/BookList";


const ProfilePage = () => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {user, BookList, } = await getUserInfo();
    //         setUser(user);
    //         BookList={BookList}
    //     }
    // })


    
}

export default ProfilePage;