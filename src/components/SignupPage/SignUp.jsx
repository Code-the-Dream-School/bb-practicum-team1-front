import TextInput from '../inputs/TextInput';
import React, { useState } from 'react';
import validator from 'validator';

export function SignUp() {

    const [errorMessage, setErrorMessage] = useState('')
 
    const validate = (value) => {
 
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }
  
    function handleSubmit(event, value) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formProps = Object.fromEntries(formData)
        console.log('You signed up!')
        console.log(formProps)
        console.log(event)
        // validate()
        console.log(formProps.signUpPassword)
        console.log(formProps.signUpConfirmPassword)
        if (formProps.signUpPassword !== formProps.signUpConfirmPassword ) {
            setErrorMessage('The Password do not match');
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="First Name"
                    type="text"
                    id="signUpFirstName"
                    label="First Name"
                />

                <TextInput
                    placeholder="Last Name"
                    type="text"
                    id="signUpLastName"
                    label="Last Name"
                />

                <TextInput
                    placeholder="Address"
                    type="address"
                    id="address"
                    label="Address"
                />

                <TextInput
                    placeholder="Email"
                    type="email"
                    id="signUpEmail"
                    label="Email"
                />

                <TextInput
                    placeholder="Username"
                    type="username"
                    id="userName"
                    label="Username"
                />

                <TextInput
                    placeholder="Date of Birth"
                    type="date"
                    id="DateOfBirth"
                    label="Date of Birth"
                />

                <TextInput
                    type="password"
                    id="signUpPassword"
                    label="Password"
                    placeholder="********"
                    onChange={(e) => validate(e.target.value)}
                />

                <TextInput
                    placeholder="********"
                    type="password"
                    id="signUpConfirmPassword"
                    label="Confirm Password"
                    onChange={(e) => validate(e.target.value)}
                />
                
                {errorMessage === '' ? null :
                <span style={{
                fontWeight: 'bold',
                color: 'red',
                }}>{errorMessage}</span>}
                
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    )
}
