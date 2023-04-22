import React, { useState } from 'react';
import TextInput from '../inputs/TextInput'
import { signUpAdapter } from '../../adapters/auth-adapters';
import { getCookie } from '../../util/Authentication';

export function SignUp({ setSessionObject } ) {

    const [errorMsg, setErrorMsg] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [state, setState] = useState(false);

    var minNumberofChars = 8;
    var maxNumberofChars = 16;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    var minDate = "1900-05-25"

    function handleSubmit(event) {
        event.preventDefault();
        setState(false);
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        const bday = formProps.DateOfBirth;
        const newPassword = formProps.signUpPassword;
        const confirmPass = formProps.signUpConfirmPassword;
        
        if (newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars) {
            setErrorMessage('The length of the Password should be between 8 and 16 characters');
            setState(false);
        } if (bday > today) {
            setErrorMessage('The birthday is incorrect')
            console.log(bday, today)
            setState(false)
        } else if (newPassword !== confirmPass) {
            setErrorMessage('The passwords do not match');
            setState(false);
        } else if (!regularExpression.test(newPassword)) {
            setErrorMessage('The password should contain at least one uppercase letter, one lowercase letter, and one number');
            setState(false);
        } else {
            setErrorMessage('You signed up!');
            setState(true);
        }

        const data = {};
        data.email = formProps.signUpEmail;
        data.password = formProps.signUpPassword;
        data.givenName = formProps.signUpFirstName;
        data.username = formProps.userName;
        data.dateOfBirth = formProps.dateOfBirth;
        data.familyName = formProps.signUpLastName;
        data.address = formProps.address;
        data.role = 'user';
        // test data
        data.latitude = 12.12;
        data.longitude = 11.11;

        // Call signUpAdapter
        signUpAdapter(data).then(result => {
            if (result) {
                setErrorMsg('');
                setSessionObject(getCookie());
            }   
        }).catch(e => {
            console.log(e);
            setErrorMsg(JSON.parse(e.message).msg) 
        });
    }

    return (
        <div className="signUP-container">
            {/* Handling Error Message */}
            {errorMsg !== '' ? <p display='block' >{errorMsg}</p> : null}
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='textInputs'>
                    <TextInput
                        placeholder="First Name"
                        type="text"
                        id="signUpFirstName"
                        label="First Name"
                        isRequired={true}
                    />

                    <TextInput
                        placeholder="Last Name"
                        type="text"
                        id="signUpLastName"
                        label="Last Name"
                        isRequired={true}
                    />

                    <TextInput
                        placeholder="Address"
                        type="address"
                        id="address"
                        label="Address"
                        isRequired={true}
                    />

                    <TextInput
                        placeholder="Email"
                        type="email"
                        id="signUpEmail"
                        label="Email"
                        isRequired={true}
                    />

                    <TextInput
                        placeholder="Username"
                        type="username"
                        id="userName"
                        label="Username"
                        isRequired={true}
                    />

                    <TextInput
                        placeholder="Date of Birth"
                        type="date"
                        id="dateOfBirth"
                        label="Date of Birth"
                        isRequired={true}
                        textarea={false}
                    />

                    <TextInput
                        placeholder="Password"
                        type="password"
                        id="signUpPassword"
                        label="Password"
                        isRequired={true}
                    />

                    <TextInput
                        placeholder="Confirm Password"
                        type="password"
                        id="signUpConfirmPassword"
                        label="Confirm Password"
                        isRequired={true}
                    />
                </div><br/>
                <button type="submit" className="submitButton">Submit</button>
            </form>        
            {errorMessage === '' ? null :
                    <span className='error-message'>{errorMessage}</span>}
        </div>
    )
}
