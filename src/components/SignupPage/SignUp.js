import React, { useState } from 'react';
import TextInput from '../inputs/TextInput'
import { signUpAdapter } from '../../adapters/auth-adapters';
import { getCookie } from '../../util/Authentication';

const showPass = '\u25C9';
const hidePass = '\u25CE';

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

export function SignUp({ setSessionObject } ) {

    const [errorMsg, setErrorMsg] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [state, setState] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfShown, setPasswordConfShown] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setState(false);
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);

        const data = {};
        data.email = formProps.signUpEmail;
        data.password = formProps.signUpPassword;
        data.givenName = formProps.signUpFirstName;
        data.username = formProps.userName;
        data.dateOfBirth = formProps.dateOfBirth;
        data.familyName = formProps.signUpLastName;
        data.address = formProps.address;
        data.role = 'user';
        data.confirmPass = formProps.signUpConfirmPassword;

        if (data.password.length < minNumberofChars || data.password.length > maxNumberofChars) {
            setErrorMessage('The length of the Password should be between 8 and 16 characters');
            setState(false);
        } if (data.dateOfBirth > today) {
            setErrorMessage('The birthday is incorrect')
            console.log(data.dateOfBirth, today)
            setState(false)
        } else if (data.password !== data.confirmPass) {
            setErrorMessage('The passwords do not match');
            setState(false);
        } else if (!regularExpression.test(data.password)) {
            setErrorMessage('The password should contain at least one uppercase letter, one lowercase letter, and one number');
            setState(false);
        } else {
            setErrorMessage('You signed up!');
            setState(true);
        }

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
    const togglePassword = () => {
        // When the handler is invoked inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const togglePasswordConf = () => {
        // When the handler is invoked inverse the boolean state of passwordConfShown
        setPasswordConfShown(!passwordConfShown);
      };

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
                        placeholder="ex. 2200 Engle Rd"
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
                    <div className='input-checkbox'>
                        <TextInput
                            placeholder="**********"
                            type={passwordShown ? "text" : "password"}
                            id="signUpPassword"
                            label="Password"
                            isRequired={true}
                        />
                        <button onClick={togglePassword} className='show-pass-btn'>{passwordShown ? <span>{hidePass}</span> : <span>{showPass}</span>}</button>
                    </div>
                    
                    <div className='input-checkbox'> 
                        <TextInput
                            placeholder="**********"
                            type={passwordConfShown ? "text" : "password"}
                            id="signUpConfirmPassword"
                            label="Confirm Password"
                            isRequired={true}
                        />
                        <button onClick={togglePasswordConf} className='show-pass-btn'>{passwordConfShown ? <span>{hidePass}</span> : <span>{showPass}</span>}</button>
                    </div>
                </div><br/>
                <button type="submit" className="submitButton">Submit</button>
            </form>        
            {errorMessage === '' ? null :
                    <span className='error-message'>{errorMessage}</span>}
        </div>
    )
}
