import React, { useState, useContext, useEffect } from 'react';
import { SessionContext } from '../../App';
import { getAllConversationAdapter } from "../../adapters/message-adapters"; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const AllConversations = () => {
    const sessionObject = useContext(SessionContext);
    const [allConversations, setAllConversations] = useState({});
    const [loading, setLoading] = useState(false);

    //Load all conversations where current user participated
    useEffect(() => {
        setLoading(true);
        getAllConversationAdapter().then(response => {
            setAllConversations(response || {}); //Received map recipientId -> list of messages
            setLoading(false);
        });
    }, [])

    return (
        <div className='allconversations-page'>
            {allConversations ? 
            <div>
                {Object.keys(allConversations).map(key => 
                    <div  className='allconversations-list' id={`conversation${key}`} key={`conversation${key}`}>
                        <p className='allconversations-user' style={{color: 'black'}}>Message history with user {key}: ({allConversations[key].length}) message(s)</p>
                        <Link to={`/chat/${key}`}>Open conversation</Link>
                    </div>
                )}
            </div> : 
            <p style={{color: 'black'}}>No conversations exist</p>
            }
            {loading ? <LoadingSpinner/> : null}
        </div>
    );
}

export default AllConversations;