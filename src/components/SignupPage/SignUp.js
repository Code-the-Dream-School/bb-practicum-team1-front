import React, { useState, useContext } from 'react';
import TextInput from '../inputs/TextInput';
import { signUpAdapter } from '../../adapters/auth-adapters';
import { getCookie, cookieName, deleteCookie } from '../../util/Authentication';
import { Link } from 'react-router-dom';
import AddressSearch from '../AddressSearch/AddressSearch';
import { InputContext } from '../../App';
import { SessionContext } from '../../App'
import { LoadingContext } from '../../App'

const showPass = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
    </svg>
)
const hidePass = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
    </svg>
)

var minNumberofChars = 8
var maxNumberofChars = 16
var today = new Date()
var dd = today.getDate()
var mm = today.getMonth() + 1
var yyyy = today.getFullYear()
var regularExpression = /^[A-Za-z0-9]{3,16}$/

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

export function SignUp() {

    const [errorMessage, setErrorMessage] = useState('')
    const [state, setState] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordConfShown, setPasswordConfShown] = useState(false);
    const [address, setAddress] = useState({})
    const inputs = useContext(InputContext)
    const { sessionObject, setSessionObject } = useContext(SessionContext)
    const { loading, setLoading } = useContext(LoadingContext)

    function selectAddress(a) {
        setAddress(a)
    }

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
        data.address = address.address;
        data.longitude = address.longitude;
        data.latitude = address.latitude;
        data.role = 'user';
        data.confirmPass = formProps.signUpConfirmPassword;

        if (data.password.length < minNumberofChars || data.password.length > maxNumberofChars) {
            setState(false);
            setErrorMessage('The length of the Password should be between 8 and 16 characters');
            return 
        } if (data.dateOfBirth > today) {
            setState(false);
            setErrorMessage('Birthday should be in the past');
            return 
        } else if (!address || !address.address) {
            setErrorMessage('Address should not be empty');
            setState(false);
            return    
        } else if (data.password !== data.confirmPass) {
            setState(false)
            setErrorMessage('Passwords do not match')
            return
        } else if (regularExpression.test(data.password)) {
            setErrorMessage(
                'Password should contain at least one uppercase letter, one lowercase letter, one special character, and one number'
            )
            setState(false)
            console.log('not strong')
            return
        } else {
            setErrorMessage('')
            setState(true)
        }

        //Call signUpAdapter
        setLoading(true)
        signUpAdapter(data).then(result => {

            if (result) {
                setSessionObject(getCookie(cookieName));            
                setErrorMessage('');    
                setLoading(false)
        
            }  else {
                deleteCookie(cookieName);
                setSessionObject({})
                setErrorMessage('');
                setState(true);
                setLoading(false)
            } 
        }).catch(e => {
            deleteCookie(cookieName);
            setSessionObject({})
            setState(false)
            console.log(e);
            setErrorMessage(JSON.parse(e.message).msg) 
            setLoading(false)
        });
    }

    const togglePassword = () => {
        // When the handler is invoked inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown)
    }

    const togglePasswordConf = () => {
        // When the handler is invoked inverse the boolean state of passwordConfShown
        setPasswordConfShown(!passwordConfShown)
    }

    return (
        <>
            {/* <h1 className='h1-sign-up'>Create an Account</h1> */}
            
            <div className="signUP-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="textInputs">
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
                            placeholder="Username"
                            type="username"
                            id="userName"
                            label="Username"
                            isRequired={true}
                        />

                        <TextInput
                            placeholder="Email"
                            type="email"
                            id="signUpEmail"
                            label="Email"
                            isRequired={true}
                        />

                        <AddressSearch id={"myAddress"} onAddressSelected={selectAddress} />

                        <TextInput
                            placeholder="Date of Birth"
                            type="date"
                            id="dateOfBirth"
                            label="Date of Birth"
                            isRequired={true}
                            textarea={false}
                        />

                        <div className="input-checkbox">
                            <TextInput
                                placeholder="**********"
                                type={passwordShown ? 'text' : 'password'}
                                id="signUpPassword"
                                label="Password"
                                isRequired={true}
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="show-pass-btn"
                            >
                                {passwordShown ? (
                                    <span>{hidePass}</span>
                                ) : (
                                    <span>{showPass}</span>
                                )}
                            </button>
                        </div>

                        <div className="input-checkbox">
                            <TextInput
                                placeholder="**********"
                                type={passwordConfShown ? 'text' : 'password'}
                                id="signUpConfirmPassword"
                                label="Confirm Password"
                                isRequired={true}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordConf}
                                className="show-pass-btn"
                            >
                                {passwordConfShown ? (
                                    <span>{hidePass}</span>
                                ) : (
                                    <span>{showPass}</span>
                                )}
                            </button>
                        </div>
                    </div>
                    <p className='link-to-login'>Have an account? <Link to="/login">Log in</Link></p>
                    {/* Handling Error Message */}         
                    <div className='error-container'>
                        {errorMessage === '' ? null :
                            <span className='error-message'>{errorMessage}</span>}
                    </div>
                    <button type="submit" className="submitButton">Register</button>
                </form>                 
            </div>
        </>
    )
}
