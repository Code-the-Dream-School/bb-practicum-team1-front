import React, { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../App';
import { getAllConversationAdapter } from "../../adapters/message-adapters"; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const AllConversations = () => {
    const sessionObject = useContext(SessionContext);
    const [allConversations, setAllConversations] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllConversationAdapter().then(response => {
            setAllConversations(response || {}); //Received map recipientId -> list of messages
            setLoading(false);
        });
    }, [])

    return (
        <>
            {allConversations ? 
            <>
                {Object.keys(allConversations).map(key => 
                    <div id={`conversation${key}`} key={`conversation${key}`}>
                        <p style={{color: 'black'}}>Message history with user {key}</p>
                        <Link to={`/chat/${key}`}>Open conversation</Link>
                    </div>
                )}
            </> : 
            <p style={{color: 'black'}}>No conversations exist</p>
            }
            {loading ? <LoadingSpinner/> : null}
        </>
    );
}

export default AllConversations;