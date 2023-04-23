import { useState, useEffect } from "react";
import {ProfilePicture} from '../ProfilePage/ProfilePicture'
import {StyledHeader} from './StyledHeader.js'
import { catchErrors } from "./catchErrors";
import BookList from "../BookList/BookList";


export const User = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const {user, BookList, } = await getUserInfo();
            setUser(user);
            BookList={BookList}
        }
    })


    
}