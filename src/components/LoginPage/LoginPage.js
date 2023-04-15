import TextInput from '../inputs/TextInput'
import './Login.scss'


export const Login = () =>{
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formProps = Object.fromEntries(formData)
        console.log('You logged in!')
        console.log("formProp", formProps)
    }

    return (
        <div className="login-container"  >
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
