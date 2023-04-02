import {getCookie , setCookie, deleteCookie} from '../util/Authentication'

export const fetchAPIData = async (url: string, method: string, body:object , headers?:object) => {
    const cookie = getCookie('shelf-share-session')as { token: string }
    const token = cookie.token
    const data = await fetch(url , {
        method,
        body: JSON.stringify(body),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...headers,
        },
    })
    const response = await data.json();
    setCookie('shelf-share-session', JSON.stringify(body) , 1 )
    return response; 
}