import TextInput from '../inputs/TextInput'

export function SignUp() {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)
        const formProps = Object.fromEntries(formData)
        console.log('You signed up!')
        console.log(formProps)
    }

    return (
        <div className="login-container">
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
