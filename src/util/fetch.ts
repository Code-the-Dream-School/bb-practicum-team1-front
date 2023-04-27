import { error } from 'console'
// Exported cookie name to easily use the same name for the same cookie accross all application to avoid misprints
import { getCookie , setCookie, deleteCookie, cookieName } from '../util/Authentication';

//Export the server URL
export const baseURL = window.location.hostname === 'localhost'? 'http://localhost:8000/api/v1/': 'https://shelf-share.onrender.com'

// Very first call to SignUp/Login will not have cookie, so there should be an option skip getting cookie from session
export const fetchAPIData = async (url: string, method: string, body:object | undefined , hasCookie=true, headers?:object) => {
    let requestHeaders:HeadersInit = {
      'Content-Type': 'application/json',
      ...headers,
    }
    if (hasCookie) {
      const cookie = getCookie(cookieName)as { token: string }
      const token = cookie?.token
      requestHeaders.Authorization = `Bearer ${token}`
    }
    
    const response = await fetch(url , {
        method,
        body: JSON.stringify(body),
        headers: requestHeaders,
    })
    

    //Status is numeric
    if(response.status >= 400 && response.status <= 599){
      const errorMsg = await response.text();
      throw new Error(errorMsg)
    }
    else{
      const data = await response.json();  
      return data; 
    }
}