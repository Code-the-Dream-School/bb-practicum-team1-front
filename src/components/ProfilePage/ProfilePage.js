import { useState, useEffect } from "react";
import {ProfilePicture} from '../ProfilePage/ProfilePicture'
import {StyledHeader} from './StyledHeader.js'


export const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await getCurrentUserProfile();
            setProfile(data);
        }
        fetchData();
    }, [])

    return(
        <>
        <div className="styledHeader">
        {profile && (
            <>
            <div>
            {ProfilePicture}
            <div>
                <div className="header__overline">Profile</div>
                <h1>{profile.display_name}</h1>
                <p className="header__meta">
                    <span>
                        {profile.friends.total}Friends{profile.friends.total !== 1 ? 's' : ''}
                    </span>
                </p>
            </div>
            </div>
            </>
        )}

        </div>
        </>

    )

}