import { error } from 'console'
import {getCookie , setCookie, deleteCookie} from '../util/Authentication'

export const fetchAPIData = async (url: string, method: string, body:object , headers?:object) => {
    const cookie = getCookie('shelf-share-session')as { token: string }
    const token = cookie?.token
    const response = await fetch(url , {
        method,
        body: JSON.stringify(body),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...headers,
        },
    })
    
    if(response.status.toString().startsWith('4')||response.status.toString().startsWith('5')){
      console.log("Error", response.status)
    }
    else{
      const data = await response.json();  
      return data; 
    }
    
   
    
}