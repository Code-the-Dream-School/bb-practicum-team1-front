import { error } from 'console'
// Exported cookie name to easily use the same name for the same cookie accross all application to avoid misprints
import { getCookie , setCookie, deleteCookie, cookieName } from '../util/Authentication';
import { Type } from '@sinclair/typebox';

// Very first call to SignUp/Login will not have cookie, so there should be an option skip getting cookie from session
export const fetchAPIData = async (url: string, method: string, body:object | undefined , hasCookie=true, headers?:object, isFormData?: Boolean) => {
    let requestHeaders:HeadersInit = {}
    if(!isFormData){
      requestHeaders['Content-Type'] = 'application/json'
    }
    if (hasCookie) {
      const cookie = getCookie(cookieName)as { token: string }
      const token = cookie?.token
      requestHeaders.Authorization = `Bearer ${token}`
    }
    requestHeaders = {...requestHeaders, ...headers}
    const bodyData = isFormData ? body : JSON.stringify(body)
    const response = await fetch(url , {
        method,
        // @ts-ignore
        body: bodyData,
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