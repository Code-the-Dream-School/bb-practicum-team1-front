import { fetchAPIData } from '../util/fetch'

// Create(send) message adapter
type messageInput ={
    receivedByUser: string,
    messageContent: string
}
/**
 * This function will create a message with the provided information.
 * @param {Object} messageInput - The input object containing information for the message creation.
 * @param {String} messageInput.receivedByUser - Receiver of the message.
 * @param {String} messageInput.messageContent - Message's content.
 * @example
 * const messageInput = {
 * receivedByUser = "642de404692aeccd4ad96542",
 * messageContent = "Hello, there!"
 * };
 * createMessageAdapter(messageInput)
 * @returns {Promise<Object>} A promise that resolves message's creation information. 
 */
export const createMessageAdapter = async(messageInput:messageInput)=>{
    const url = 'http://localhost:8000/api/v1/messages'
    const data = await fetchAPIData(url, 'POST', messageInput )
    return data   
}

// Get all conversation(messages) adapter
type messageSchema ={
    _id: string,
    postedByUser: string,
    receivedByUser: string,
    messageContent: string,
    messageRead: boolean,
    readAt: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

/**
 * Get all conversation(messages) for user
 * @example
 * getAllConversationAdapter() 
 * @returns {Promise<messageSchema[]>} A promise that resolves get all conversation information.
 */
export const getAllConversationAdapter = async():Promise<messageSchema[]> => {
    const url = 'http://localhost:8000/api/v1/messages'
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}