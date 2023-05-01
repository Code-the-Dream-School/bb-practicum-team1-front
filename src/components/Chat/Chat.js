import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SessionContext } from '../../App';
import { createMessageAdapter, getMessageConversationAdapter } from "../../adapters/message-adapters"; 
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

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
            createMessageAdapter(msg).then(response => {
                setLoading(false);
                if (response) {
                    let msgs = selectedRecipientConversations;
                    msgs.push(response.message);
                    setSelectedRecipientConversations(msgs);
                    setCurrentMessageText('')
                }
            })
        }
    }

    return (
        <>
            {selectedRecipientId ? 
            <>
                {selectedRecipientConversations && selectedRecipientConversations.length > 0 ? 
                <div id={`selectedConversation${selectedRecipientId}`} key={`selectedConversation${selectedRecipientId}`}>
                    {selectedRecipientConversations.map(item => 
                        <div id={`message${item._id}`} key={`message${item._id}`}>
                            <p style={{color: 'black'}}>{item.postedByUser}</p>
                            <p style={{color: 'black'}}>{item.messageContent}</p>
                        </div>)
                    }  
                </div> :
                null
                }
                <input type='text' placeholder='Type message' onChange={messageTextChanged} value={currentMessageText}/> <input type='button' onClick={createMessage} value='Send'></input>
            </> :
            null
            }
            {loading ? <LoadingSpinner/> : null}
        </>
    );
}

export default Chat;