import React, { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../App';
import { getAllConversationAdapter } from "../../adapters/message-adapters"; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const AllConversations = () => {
    const sessionObject = useContext(SessionContext);
    const [allConversations, setAllConversations] = useState(undefined);
    const [loading, setLoading] = useState(false);

    //Load all conversations where current user participated
    useEffect(() => {
        setLoading(true);
        getAllConversationAdapter().then(response => {
            setAllConversations(response); //Received map recipientId -> list of messages
            setLoading(false);
        });
    }, [])

    return (
        <div className='allconversations-page'>
            {allConversations && Object.keys(allConversations).length > 0 ? 
            <div className='allconversations'>
                {Object.keys(allConversations).map(key => 
                    <div  className='allconversations-list' id={`conversation${key}`} key={`conversation${key}`}>
                        <p className='allconversations-user'>Message history with user: 
                            <span className='allconversations-username'>{allConversations[key].username}</span>
                        </p>
                        <Link to={`/chat/${key}`} className='message-link'>{allConversations[key].messages.length}</Link>
                    </div>
                )}
            </div> : 
            <p className='allconversations-empty'>No conversations exist. You can start conversation with book owner using Contact the Owner button on book card</p>
            }
            {loading ? <LoadingSpinner/> : null}
        </div>
    );
}

export default AllConversations;