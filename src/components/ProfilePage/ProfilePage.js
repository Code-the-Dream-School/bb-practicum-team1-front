import { useState, useEffect } from "react";
import {ProfilePicture} from '../ProfilePage/ProfilePicture'
import {StyledHeader} from './StyledHeader.js'
import { catchErrors } from "./catchErrors";


export const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await ProfilePicture();
            catchErrors(setProfile(data));
        }
        fetchData();
    }, [])

    return(
        <>
        <div className="StyledHeader">
        {profile && (
            <>
            <div>
            {ProfilePicture}
            </div>
            </>
        )}

        </div>
        </>

    )

}