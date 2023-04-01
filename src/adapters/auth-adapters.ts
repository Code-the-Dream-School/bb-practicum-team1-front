import {getCookie , setCookie, deleteCookie} from '../util/Authentication'

const API_URL = 'http://localhost:8000/api/v1'
let endpoint = ''
export const fetchAPIData = async (url: string, method: string, body:object , headers?:object) => {
    const token = getCookie('shelf-share-session')
    console.log('token',token)
    const data = await fetch(API_URL + endpoint , {
        method,
        body: JSON.stringify(body),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...headers,
        },
    })
    const response = await data.json();
    console.log('res', response)
    setCookie('shelf-share-session', JSON.stringify(body) , 1 )
    return response; 
}


//signUp
type SignUpInput = {
    email: string,
    password: string,
    username: string,
    givenName: string,
    familyName: string,
    dateOfBirth: Date,
    address: string,
    role: string,
    latitude: number,
    longitude: number,
}
/**
* This function signs up a user with the provided information.
* @param {Object} SignUpInputs - The input object containing user's signup information.
* @param {string} SignUpInputs.email - User's email address.
* @param {string} SignUpInputs.password - User's password.
* @param {string} SignUpInputs.givenName - User's given name.
* @param {string} SignUpInputs.username - User's username.
* @param {date} SignUpInputs.dateOfBirth - User's date of birth.
* @param {string} SignUpInputs.familyName - User's family name.
* @param {string} SignUpInputs.address - User's address.
* @param {'admin'|'user'} SignUpInputs.role - User's role.
* @param {number} SignUpInputs.latitude - User's latitude.
* @param {number} SignUpInputs.longitude - User's longitude.
* @example
* const SignUpInputs = {
*   email: "john@gmail.com",
*   password: "secretpassword1234",
*   username: "John",
*   givenName: "JohnAB",
*   familyName: "ABC",
*   dateOfBirth: new Date("1991-12-02"),
*   address: "6015 Farrington Ave, Alexandria, VA  22304, United States",
*   role: 'user',
*   latitude: 38.797667,
*   longitude: -77.14066,
* };
* export const signUpAdapter = async (SignUpInputs) => {
*   // function implementation here
* };
* @returns {Promise<Object>} A promise that resolves to the user's signup information.
*/
export const signUpAdapter = async (signUpInput: SignUpInput) =>{
    endpoint = `/user/sign-up`
    //console.log('tesst', url)
    const data = await fetchAPIData(endpoint, 'POST', signUpInput)
    setCookie('shelf-share-session', 'data', 1)
    return data
}


//login
type LoginInputs = {
   email: string,
   password: string,    
}

/**
This function login a user with the provided information.
@param {Object} LoginInputs - The input object containing user's loging in information.
@param {string} LoginInputs.email- User's email address.
@param {string} LoginInputs.password- User's password.


@example
 const LoginInputs = {
    email: "john@gmail.com",
    password: "secretpassword1234"
 }

 export const loginAdapter = async (LoginInputs) => {
  // function implementation here
};

* @returns {Promise<Object>} A promise that resolves to the user's signin information.

*/
export const loginAdapter = async (loginInput: LoginInputs ) => {
    endpoint =`/user/authentication`
    const data = await fetchAPIData(endpoint , 'POST', loginInput)
    setCookie('shelf-share-session', 'data', 1)
    return data

}

//logout
/**
 * Logs the user out by deleting the session cookie.
 */
 
export const logoutAdapter = async () => {
    deleteCookie('shelf-share-session')
}
