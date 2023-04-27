import { fetchAPIData } from '../util/fetch'

// Create(send) message adapter
type messageInput = {
    receivedByUser: String,
    messageContent: String
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
export const createMessageAdapter = async(messageInput:messageInput) => {
    const url = 'http://localhost:8000/api/v1/messages'
    const data = await fetchAPIData(url, 'POST', messageInput )
    return data   
}

// Get all conversation(messages) adapter
type messageSchema = {
    _id: String,
    postedByUser: String,
    receivedByUser: String,
    messageContent: String,
    messageRead: Boolean,
    readAt: Date,
    createdAt: String,
    updatedAt: String,
    __v: Number
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

// Get messages as conversation adapter
/**
 * This function will get messages as a conversation with the provided information
 * @param {String} messagingPartnerUserId - Id of the user's messaging partner.
 * @example
 * const messagingPartnerUserId = "641cc0a509842e20b0bb987f" 
 * getMessageConversationAdapter(messagingPartnerUserId) 
 * @returns {Promise<messageSchema[]>} A promise that resolves get messages as conversation information.
 */
export const getMessageConversationAdapter = async(messagingPartnerUserId:string):Promise<messageSchema[]> => {
    const url = `http://localhost:8000/api/v1/messages/${messagingPartnerUserId}`
    const data = await fetchAPIData(url, 'GET', undefined)
    return data
}

// Update conversation status adapter
type messageBody = {
    partnerId: String
}
/**
 * This function will mark the status of conversation(messages) as read with the provided information
 * @param {String} messageBody - The body object containing information for updating the conversation(messages) status.
 * @param {String} messageBody.partnerId - Messaging partner's Id.
 * @example
 * const messageBody ={
 *   partnerId: "641a9ac03cf5c88e0ce54c35"
 * };
 * markConversationAdapter(messageBody)
 * @returns {Promise<messageSchema[]>} - A promise that resolves updating book information.
 */
export const markConversationAdapter = async(messageBody:messageBody): Promise<messageSchema[]> => {
    const url = 'http://localhost:8000/api/v1/messages'
    const data = await fetchAPIData(url, 'PATCH', messageBody)
    return data
}

// Delete single message adapter
/**
 * This function will delete a message with the provided information
 * @param {String} messageId - Id of the message.
 * @example
 * const messageId = "6439ac959e96db9092ea7bc6" 
 * deleteMessageAdapter(messageId)
 * @returns {Promise<Object>} A promise that resolves the delete message information.
 */
export const deleteMessageAdapter = async(messageId:string)  =>{
    const url = `http://localhost:8000/api/v1/books/${messageId}`
    const data = await fetchAPIData(url, 'DELETE', undefined)
    return data
}