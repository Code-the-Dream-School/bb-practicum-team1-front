
import { baseURL } from "../util/fetch";
import {io , Socket} from 'socket.io-client'

//New message adapter

//By using interFace we are defining a structure for our object, here EventListener is an object with single optional message property, which return nothing.
interface EventListeners {
  newMessage?: (message: any) => void;
  partnerUsers?: (activeUsers: any) => void;
}
/** 
*@param {EventListeners} eventListeners - The server URL to be connected with.
*@example
*const url = `${baseURL}`
*const eventListeners{
*   newMessage : message => 
*   console.log(`New message recieved ${message}`)
*}
*newMessageAdapter(eventListeners)
**/
export const newMessageAdapter = async(eventListeners: EventListeners) => {
    
    //creates a new instance of the Socket.IO client that is connected to the server
    const socket = io(baseURL);

    socket.on('newMessage', message =>{

        if(eventListeners.newMessage ){
           eventListeners.newMessage(message)
        }
    })

    socket.on('error', (error: any) => {
    console.error('Socket error:', error);
  });
}


// Partner users adapter

/** 
*@param {EventListeners} eventListeners - The server URL to be connected with.
*@example
*const url = `${baseURL}`
*const eventListeners{
*   partnerUsers : activeUsers => 
*   console.log(`New user connected ${activeUsers}`)
*}
*partnerUsersAdapter(eventListeners)
**/
export const partnerUsersAdapter = async(eventListeners: EventListeners) => {
    
    //creates a new instance of the Socket.IO client that is connected to the server
    const socket = io(baseURL);

    socket.on('partnerUsers', activeUsers =>{

        if(eventListeners.partnerUsers ){
           eventListeners.partnerUsers(activeUsers)
        }
    })
    
    socket.on('error', (error: any) => {
    console.error('Socket error:', error);
  });
}
