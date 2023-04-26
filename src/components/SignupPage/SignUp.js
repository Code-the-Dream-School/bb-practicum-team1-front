import React, { useState, useContext } from 'react'
import { sessionContext } from '../../context/session-provider'
import TextInput from '../inputs/TextInput'
import { signUpAdapter } from '../../adapters/auth-adapters'
import { getCookie } from '../../util/Authentication'

export function SignUp() {
    const [errorMsg, setErrorMsg] = useState('')

    const { setSessionObject } = useContext(sessionContext)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formProps = Object.fromEntries(formData)

        const data = {}
        data.email = formProps.signUpEmail
        data.password = formProps.signUpPassword
        data.givenName = formProps.signUpFirstName
        data.username = formProps.userName
        data.dateOfBirth = formProps.dateOfBirth
        data.familyName = formProps.signUpLastName
        data.address = formProps.address
        data.role = 'user'
        // test data
        data.latitude = 12.12
        data.longitude = 11.11

        // Call signUpAdapter
        signUpAdapter(data)
            .then((result) => {
                if (result) {
                    setErrorMsg('')
                    setSessionObject(getCookie())
                }
            })
            .catch((e) => {
                console.log(e)
                setErrorMsg(JSON.parse(e.message).msg)
            })
    }

    return (
        <div className="login-container">
            {/* Handling Error Message */}
            {errorMsg !== '' ? <p display="block">{errorMsg}</p> : null}

            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="First Name"
                    type="text"
                    id="signUpFirstName"
                    label="First Name"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Last Name"
                    type="text"
                    id="signUpLastName"
                    label="Last Name"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Address"
                    type="address"
                    id="address"
                    label="Address"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Email"
                    type="email"
                    id="signUpEmail"
                    label="Email"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Username"
                    type="username"
                    id="userName"
                    label="Username"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Date of Birth"
                    type="date"
                    id="dateOfBirth"
                    label="Date of Birth"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Password"
                    type="password"
                    id="signUpPassword"
                    label="Password"
                    required
                    textarea={false}
                />

                <TextInput
                    placeholder="Confirm Password"
                    type="password"
                    id="signUpConfirmPassword"
                    label="Confirm Password"
                    required
                    textarea={false}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
