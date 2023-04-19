import React, { useState } from 'react';
import TextInput from '../inputs/TextInput'
import './Login.scss'
import { loginAdapter } from '../../adapters/auth-adapters';
import { getCookie , setCookie, deleteCookie, cookieName } from '../../util/Authentication';


export const Login = () => {

    const [errorMsg, setErrorMsg] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formProps = Object.fromEntries(formData)

        const data = {};
        data.email = formProps.logInEmail;
        data.password = formProps.logInPassword;
        
        // Call loginAdapter
        loginAdapter(data).then(result => {
            if (result) {
                setErrorMsg('');
            }   
        }).catch(e => {
            setErrorMsg(JSON.parse(e.message).msg) 
        });
    }

    return (
        <div className="login-container"  >
            {/* Handling Error Message */}
            {errorMsg !== '' ? <p>{errorMsg}</p> : null}

            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="Email"
                    type="email"
                    id="logInEmail"
                    label="Email"
                    textarea={false}
                />
                <TextInput
                    placeholder="Password"
                    type="password"
                    id="logInPassword"
                    label="Password"
                    textarea={false}
                />
            

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
