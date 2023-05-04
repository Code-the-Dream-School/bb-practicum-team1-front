import {io, Socket} from 'socket.io-client'
import { getCookie, cookieName } from '../util/Authentication';
const socketURL = window.location.hostname === 'localhost'? 'ws://localhost:8000': 'wss://shelf-share.onrender.com'

const jwtCookie = getCookie(cookieName)as { token: string }
const jwtToken = jwtCookie ? jwtCookie.token: null;

// Typing status adapter
interface EventListeners {
    typingStatus?: (typing: boolean)=> void
}
/**
 * @param {EventListeners} eventListeners - An object with optional properties that will be called when certain event occurs
 * @example
 * const url = `${socketURL}`
 * const eventListeners = {
 *   typingStatus: (typing) => {
 *     console.log(`The user is ${typing ? 'typing' : 'not typing'}`)
 *   }
 * }
 * userTypingStatusAdapter(eventListeners)
 */
export const userTypingStatusAdapter = async (eventListeners:EventListeners) => {
    const socket: Socket = io(`${socketURL}/?token=${jwtToken}`)

    socket.on('connect' , () =>{
        console.log('Connected to the server!')
      })

    socket.on('typingStatus', typing =>{

        if(eventListeners.typingStatus){
            eventListeners.typingStatus(typing)
        }
    })
    socket.on('error', (error: any) => {
        console.error('Socket error:', error);
      });
}

