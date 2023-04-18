import TextInput from '../inputs/TextInput';
import React from 'react';
import { useForm } from 'react-hook-form';

export function SignUp() {
    function handleSubmit(event) {
        event.preventDefault()
        // const formData = new FormData(event.target)
        // const formProps = Object.fromEntries(formData)
        // console.log('You signed up!')
        // console.log(formProps)
        console.log(event)
    }

    // const { register, getValues, watch, formState: { errors } } = useForm();

    // const [password, setPassword] = useState('');

    const {register, watch} = useForm();

    return (
        <div className="login-container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextInput
                    placeholder="First Name"
                    type="text"
                    id="signUpFirstName"
                    label="First Name"
                    // textarea={false}
                />

                <TextInput
                    placeholder="Last Name"
                    type="text"
                    id="signUpLastName"
                    label="Last Name"
                    // textarea={false}
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

                    {...register("password", {
                        required: true
                    })}
                    placeholder="********"

                />
                {/* {errors?.password?.type === "required" && <p>This field is required</p>}
                {errors?.password?.type === "minLength" && (
                <p>password cannot less than 5 characters</p>
                )} */}
                {/* include validation with required or other standard HTML validation rules */}

                <TextInput
                    // {...register("password_repeat", { required: true })}
                    placeholder="********"
                    type="password"
                    id="signUpConfirmPassword"
                    label="Confirm Password"
                    {...register("confirm_password", {
                        required: true,
                        validate: (val) => {
                          if (watch('password') != val) {
                            return "Your passwords do no match";
                          }
                        },
                       })}
                    // textarea={false}
                />
                {/* errors will return when field validation fails  */}
                {/* here we watch the both password and confirm password filed and if both not match, trigger the validation */}
                {/* {watch("password_repeat") !== watch("password") &&
                getValues("password_repeat") ? (
                <p>password not match</p>
                ) : null} */}

                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    )
}
