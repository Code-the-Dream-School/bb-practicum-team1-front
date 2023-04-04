import TextInput from '../inputs/TextInput'
import './Login.scss'


export const NewLogin = () =>{
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

                <TextInput
                    placeholder="Confirm Password"
                    type="password"
                    id="logInConfirmPassword"
                    label="Confirm Password"
                    textarea={false}
                />

                <button type="submit">Log In</button>
            </form>
        </div>
    )




}

// export const LoginPage = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     function validateForm() {
//         return email.length > 0 && password.length > 0
//     }

//     function handleSubmit(event) {
//         event.preventDefault()
//         console.log(email, password)
//     }

//     <div>
//         <h1>This is the Login Page</h1>
//     </div>
//     return (
//         <div className="Login">
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group size="lg" controlId="email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                         autoFocus
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button
//                     block="true"
//                     size="lg"
//                     type="submit"
//                     disabled={!validateForm}
//                 >
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     )
// }