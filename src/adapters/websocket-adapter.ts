import {io, Socket} from 'socket.io-client'
const socketURL = window.location.hostname === 'localhost'? 'ws://localhost:8000/api/v1/': 'ws://shelf-share.onrender.com/api/v1/'

// Typing status adapter
interface EventListeners {
    typingStatus?: (typing: boolean)=> void
}
/**
 * @param {EventListeners} eventListeners - An object with optional properties that will be called when certain event occurs
 * @example
 * const eventListeners = {
 *   typingStatus: (typing) => {
 *     console.log(`User is typing: ${typing}`);
 *   }
 * };
 * userTypingStatusAdapter(eventListeners)
 */
export const userTypingStatusAdapter = async (eventListeners:EventListeners) => {
    const socket : Socket = io(socketURL)

    socket.on('typingStatus', typing =>{
        if(eventListeners.typingStatus){
            eventListeners.typingStatus(typing)
        }
    })
    socket.on('error', (error: any) => {
        console.error('Socket error:', error);
      });
}

