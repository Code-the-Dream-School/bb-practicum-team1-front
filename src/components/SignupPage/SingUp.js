import TextInput from '../inputs/TextInput';
import { sub } from "date-fns/fp";

const yourValidationSchema = yup.object().shape({
    name: yup.string().required(),
    dob: yup
      .date()
      .required()
      .max(sub({ years: 18 }, new Date()), "User must be over 18 years old"),
})

export function SignUp() {
    function handleSubmit(event) {
        event.preventDefault()
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
                    textarea={false}
                />

                <TextInput
                    placeholder="Last Name"
                    type="text"
                    id="signUpLastName"
                    label="Last Name"
                    textarea={false}
                />

                <TextInput
                    placeholder="Address"
                    type="address"
                    id="address"
                    label="Address"
                    textarea={false}
                />

                <TextInput
                    placeholder="Email"
                    type="email"
                    id="signUpEmail"
                    label="Email"
                    textarea={false}
                />

                <TextInput
                    placeholder="Username"
                    type="username"
                    id="userName"
                    label="Username"
                    textarea={false}
                />

                <TextInput
                    placeholder="Date of Birth"
                    type="date"
                    id={yourValidationSchema}
                    label="Date of Birth"
                    textarea={false}
                    min={yourValidationSchema}
                />

                <TextInput
                    placeholder="Password"
                    type="password"
                    id="signUpPassword"
                    label="Password"
                    textarea={false}
                />

                <TextInput
                    placeholder="Confirm Password"
                    type="password"
                    id="signUpConfirmPassword"
                    label="Confirm Password"
                    textarea={false}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
