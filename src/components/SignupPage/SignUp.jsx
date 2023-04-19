import TextInput from '../inputs/TextInput';
import React, { useState } from 'react';


export function SignUp() {

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
        event.preventDefault()
        setState(false);
        const formData = new FormData(event.target)
        const formProps = Object.fromEntries(formData)
        const bday = formProps.DateOfBirth;
        const newPassword = formProps.signUpPassword;
        const confirmPass = formProps.signUpConfirmPassword;
        console.log(newPassword, confirmPass)
            
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
        // console.log(state)
    }

    return (
        <div className="signUP-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='textInputs'>
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
                        min={minDate} 
                        max={today}
                    />

                    <TextInput
                        type="password"
                        id="signUpPassword"
                        label="Password"
                        placeholder="********"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />

                    <TextInput
                        placeholder="********"
                        type="password"
                        id="signUpConfirmPassword"
                        label="Confirm Password"
                        onChange={(e) => handleSubmit(e.target.value)}
                    />
                    
                </div><br/>
                <button type="submit" className="submitButton">Submit</button>
            </form>

            {errorMessage === '' ? null :
                    <span className='error-message'>{errorMessage}</span>}
        </div>
    )
}
