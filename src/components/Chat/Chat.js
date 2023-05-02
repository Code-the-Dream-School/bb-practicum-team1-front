import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SessionContext } from '../../App';
import { createMessageAdapter, getMessageConversationAdapter } from "../../adapters/message-adapters"; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { format } from 'date-fns';

const Chat = () => {

    const params = useParams();
    const sessionObject = useContext(SessionContext);

    const [selectedRecipientId, setSelectedRecipientId] = useState('');
    const [selectedRecipientConversations, setSelectedRecipientConversations] = useState([]);
    const [currentMessageText, setCurrentMessageText] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //If recipient selected then load only messages history for given recipient
        if (params.recipientId) {
            setSelectedRecipientId(params.recipientId);
            setLoading(true);
            getMessageConversationAdapter(params.recipientId).then(response => {
                console.log(response.messages)
                setSelectedRecipientConversations(response ? response.messages : []); //Received list of messages
                setLoading(false);
            });
        }
    }, [])

    const messageTextChanged = (e) => {
        setCurrentMessageText(e.target.value);
    }

    const createMessage = () => {
        if (currentMessageText) {
            let msg = {};
            msg.messageContent = currentMessageText;
            msg.receivedByUser = selectedRecipientId;
            setLoading(true);
            //Send message to backend
            createMessageAdapter(msg).then(response => {
                setLoading(false);
                if (response) {
                    //If we received response from backend it means that message was persisted to database
                    //now we can add it to conversation without sending request to server 
                    let msgs = selectedRecipientConversations;
                    msgs.push(response.message);
                    setSelectedRecipientConversations(msgs);
                    setCurrentMessageText('')
                }
            })
        }
    }

    return (
        <div className='chat-page'>
            {selectedRecipientId ? 
            <div className='chat-page-input'>
                {selectedRecipientConversations && selectedRecipientConversations.length > 0 ? 
                <div className='chat-conversation' id={`selectedConversation${selectedRecipientId}`} key={`selectedConversation${selectedRecipientId}`}>
                    {selectedRecipientConversations.map(item => 
                        <div className='chat-page-message' id={`message${item._id}`} key={`message${item._id}`}>
                            <p className='message-username'>{format(new Date(item.createdAt), 'MM-dd-yyyy HH:mm:ss')}</p>
                            <p className='message-username'>{item.postedByUser}</p>
                            <p className='message-user-message'>{item.messageContent}</p>
                        </div>)
                    }  
                </div> :
                null
                }
                <input 
                    type='text' 
                    placeholder='Type message' 
                    onChange={messageTextChanged} 
                    value={currentMessageText}
                /> 
                <button className='chat-send-button' type='submit' onClick={createMessage}>Send</button>
            </div> :
            null
            }
            {loading ? <LoadingSpinner/> : null}
        </div>
    );
}

export default Chat;