import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SessionContext } from '../../App';
import { createMessageAdapter, getMessageConversationAdapter } from "../../adapters/message-adapters"; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { format } from 'date-fns';
import { newMessageAdapter } from "../../adapters/websocket-adapter"; 

const Chat = () => {

    const params = useParams();
    const sessionObject = useContext(SessionContext);

    const [selectedRecipientId, setSelectedRecipientId] = useState('');
    const [selectedRecipientConversations, setSelectedRecipientConversations] = useState({});
    const [currentMessageText, setCurrentMessageText] = useState('');
    const [loading, setLoading] = useState(false);

    const eventListeners = {
        newMessage : message => {
            setSelectedRecipientConversations(prev =>{
                let msgs = [...prev.messages, message.message];
                return ({
                    ...prev,
                    messages: msgs
                });
            });
        }       
    };

    newMessageAdapter(eventListeners);

    useEffect(() => {
        //If recipient selected then load only messages history for given recipient
        if (params.recipientId) {
            setSelectedRecipientId(params.recipientId);
            setLoading(true);
            getMessageConversationAdapter(params.recipientId).then(response => {
                setSelectedRecipientConversations(response ? response[0] : {}); //Received list of messages
                setLoading(false);
            });
        }
    }, [params.recipientId])

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
                    setSelectedRecipientConversations(prev =>{
                        let msgs = [...prev.messages, response.message];
                        return ({
                            ...prev,
                            messages: msgs
                        });
                    });
                    setCurrentMessageText('');
                }
            })
        }
    }

    const calculateUsername = (userId, otherUserId, otherUserName, sessionObject) => {
        if (userId === otherUserId) {
            return `User ${otherUserName}` ;
        }
        if (userId === sessionObject.user.userId) {
            return 'You';
        } 
        return userId;
    }

    return (
        <div className='chat-page'>
            {selectedRecipientId ? 
            <div className='chat-page-input'>
                {selectedRecipientConversations && selectedRecipientConversations.messages && selectedRecipientConversations.messages.length > 0 ? 
                <div className='chat-conversation' id={`selectedConversation${selectedRecipientId}`} key={`selectedConversation${selectedRecipientId}`}>
                    {selectedRecipientConversations.messages.map(item => 
                        <div className='chat-page-message' id={`message${item._id}`} key={`message${item._id}`}>
                            <p className='message-username'>{format(new Date(item.createdAt), 'MM-dd-yyyy HH:mm:ss')}</p>
                            <p className='message-username'>{calculateUsername(item.postedByUser, selectedRecipientConversations.userId, selectedRecipientConversations.username, sessionObject.sessionObject)}</p>
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